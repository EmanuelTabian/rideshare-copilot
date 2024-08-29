import axios from "axios";
import { ridebackendURL } from "./rideauthApi";

axios.defaults.withCredentials = true;

export async function directUploadStart(data) {
  const fileName = data.image[0].name;
  const fileType = `image/${data.image[0].name.slice(-3)}`;
  const file = data.image[0];

  try {
    // Get the presigned data
    const response = await axios.post(`${ridebackendURL}/upload/direct/start`, {
      file_name: fileName,
      file_type: fileType,
    });
    console.log(response.data);
    const { url, fields } = response.data;
    const postData = new FormData();
    Object.entries(fields).forEach(([key, value]) =>
      postData.append(key, value)
    );
    postData.append("file", file);
    const uploadData = await axios.post(url, postData);
    console.log(uploadData);
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to start the upload process! ☹️`
    );
  }
}
