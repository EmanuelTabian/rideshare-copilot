import axios from "axios";
import { ridebackendURL } from "./rideauthApi";

axios.defaults.withCredentials = true;

export async function directUploadStart(data) {
  const fileName = data.image[0].name;
  const fileType = `image/${data.image[0].name.slice(-3)}`;
  const file = data.image[0];

  try {
    // Get the presigned data
    const presignedRes = await axios.post(
      `${ridebackendURL}/upload/direct/start`,
      {
        file_name: fileName,
        file_type: fileType,
      }
    );

    // Perform the actual upload
    const { url, fields } = presignedRes.data;

    const postData = new FormData();
    Object.entries(fields).forEach(([key, value]) =>
      postData.append(key, value)
    );
    postData.append("file", file);

    if (!file) return;

    await axios.post(url, postData);
    // Mark the upload process as finished
    await axios.post(`${ridebackendURL}/upload/direct/finish`, {
      file_id: presignedRes.data.id,
    });

    return presignedRes.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to start the upload process! ☹️`
    );
  }
}

export async function addCarPost(carData) {
  try {
    const response = await axios.post(`${ridebackendURL}/add-carpost`, carData);
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to add your post`);
  }
}

export async function getCarPosts() {
  try {
    const response = await axios.get(`${ridebackendURL}/get-carposts`);
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

export async function getUserCarPosts() {
  try {
    const response = await axios.get(`${ridebackendURL}/get-user-carposts`);
    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to get your car posts!`
    );
  }
}

export async function getImageUrl(file_key) {
  console.log(file_key);

  try {
    const response = await axios.get(
      `${ridebackendURL}/get-image-by-file-key/${file_key}`
    );
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to get the image!`);
  }
}

export async function deleteCarPost({ id, image_id, image_key }) {
  const carPostDeleteData = {
    car_post_id: id,
    image_id,
  };

  try {
    // Deletes the post and the file entry on the database
    await axios.delete(`${ridebackendURL}/delete-ridepost`, {
      data: carPostDeleteData,
    });

    // Deletes the image of the post from the AWS S3 Bucket
    await axios.delete(
      `${ridebackendURL}/delete-image-by-file-key/${image_key}`
    );
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to delete the post!`);
  }
}

export async function updateCarPost(data) {
  console.log(data);

  try {
    const presignedPostEditURL = await axios.put(
      `${ridebackendURL}/put-image`,
      data
    );
    console.log(presignedPostEditURL.data);
    const { id, url } = presignedPostEditURL.data;

    await axios.put(url, data.formData.image[0], {
      headers: {
        "Content-Type": data.formData.image[0].type,
      },
    });

    if (!file) return;
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to update the post!`);
  }
}
