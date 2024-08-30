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
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to start the upload process! ☹️`
    );
  }
}

export async function addCarPost(carData) {
  console.log(carData);

  try {
    const response = await axios.post(`${ridebackendURL}/add-carpost`, carData);
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} Sorry, we were unable to add your post`);
  }
}
