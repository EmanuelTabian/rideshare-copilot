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

      // Perform the actual upload
      const { url, fields } = presignedResponse.data;
      console.log(url);

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

export async function deleteCarPost(carPostId) {
  console.log(carPostId);

  try {
    // Deletes the post and the file entry on the database
    await axios.delete(`${ridebackendURL}/delete-ridepost`, {
      data: { car_post_id: carPostId },
    });
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to delete the post!`);
  }
}

export async function updateCarPost(formData) {
  console.log(formData);

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => data.append(key, value));
  data.append("image", formData.image[0]);

  try {
    await axios.put(`${ridebackendURL}/update-ridepost/${formData.id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to update the post!`);
  }
}
