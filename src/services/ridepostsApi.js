import axios from "axios";
import { ridebackendURL } from "./rideauthApi";

axios.defaults.withCredentials = true;

export async function directUploadStart(data) {
  const fileName = data.image[0].name;
  const fileType = `image/${data.image[0].name.slice(-3)}`;
  // const fileName = data.image[0].name.slice(0, image.lastIndexOf("."));

  console.log(fileType, fileName);

  try {
    const response = await axios.post(`${ridebackendURL}/upload/direct/start`, {
      file_name: fileName,
      file_type: fileType,
    });
    console.log(response);
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to start the upload process! ☹️`
    );
  }
}
