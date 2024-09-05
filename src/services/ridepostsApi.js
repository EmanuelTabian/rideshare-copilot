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

    return fields;
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

export async function deleteCarPost({ id, image_key }) {
  try {
    // Deletes the post
    await axios.delete(`${ridebackendURL}/delete-ridepost/${id}`);

    // Deletes the image of the post from the AWS S3 Bucket
    await axios.delete(
      `${ridebackendURL}/delete-image-by-file-key/${image_key}`
    );
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to delete the post!`);
  }
}

export async function updateCarPost({ formData, image_key }) {
  try {
    await axios.put(
      `${ridebackendURL}/put-image-by-file-key/${image_key}`,
      formData
    );
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to update the post!`);
  }
}
