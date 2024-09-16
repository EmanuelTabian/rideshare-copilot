import axios from "axios";
import { ridebackendURL } from "./rideauthApi";

axios.defaults.withCredentials = true;

export async function addCarPost(data) {
  try {
    const carPostResponse = await axios.post(
      `${ridebackendURL}/add-carpost`,
      data
    );
    if (data.image.length) {
      const file = data.image[0];
      // Get the presigned data
      const presignedResponse = await axios.post(
        `${ridebackendURL}/upload/direct/start`,
        {
          file_name: file.name,
          file_type: file.type,
          car_post_id: carPostResponse.data.id,
        }
      );
      console.log(presignedResponse.data);

      // Perform the actual upload
      const { url, fields } = presignedResponse.data;
      const postData = new FormData();
      Object.entries(fields).forEach(([key, value]) =>
        postData.append(key, value)
      );
      postData.append("file", file);
      await axios.post(url, postData);
      // Mark the upload process as finished
      await axios.post(`${ridebackendURL}/upload/direct/finish`, {
        file_id: presignedResponse.data.id,
      });
      return presignedRes.data;
    }
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to add your post`);
  }
}

export async function getCarPosts(page) {
  try {
    const response = await axios.get(`${ridebackendURL}/get-carposts/${page}`);
    console.log(response.data);

    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to get car posts for you!`
    );
  }
}

export async function getCarPost(id) {
  try {
    const response = await axios.get(`${ridebackendURL}/get-carpost/${id}`);

    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to get your car post!`
    );
  }
}

export async function getUserCarPosts(page) {
  try {
    const response = await axios.get(
      `${ridebackendURL}/get-user-carposts/${page}`
    );
    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to get your car posts!`
    );
  }
}

export async function getImageUrl(carPostId) {
  try {
    const response = await axios.get(
      `${ridebackendURL}/get-image-by-post-id/${carPostId}`
    );
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to get the image!`);
  }
}

export async function deleteCarPost({ id, image_key }) {
  const carPostDeleteData = {
    car_post_id: id,
  };
  try {
    // Deletes the post and the file entry on the database
    await axios.delete(`${ridebackendURL}/delete-ridepost`, {
      data: carPostDeleteData,
    });

    // Deletes the image of the post from the AWS S3 Bucket
    if (image_id)
      await axios.delete(
        `${ridebackendURL}/delete-image-by-file-key/${image_key}`,
        { data: carPostDeleteData }
      );
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to delete the post!`);
  }
}

export async function updateCarPost({ formData, imageData }) {
  console.log(formData);
  console.log(imageData);

  try {
    if (imageData.image_id) {
      const presignedPostEditURL = await axios.put(
        `${ridebackendURL}/put-image`,
        imageData
      );
      console.log(presignedPostEditURL);

      const { url } = presignedPostEditURL.data;

      await axios.put(url, formData.image[0], {
        headers: {
          "Content-Type": formData.image[0].type,
        },
      });
    }

    if (imageData.file_id && !formData.image[0]) {
      await axios.delete(
        `${ridebackendURL}/delete-image-by-file-key/${formData.image_key}`,
        { data: { image_id: formData.image_id } }
      );
    }

    await axios.patch(
      `${ridebackendURL}/update-ridepost/${formData.id}`,
      formData
    );
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to update the post!`);
  }
}
