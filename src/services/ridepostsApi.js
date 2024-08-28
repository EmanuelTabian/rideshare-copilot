import axios from "axios";
import { ridebackendURL } from "./rideauthApi";

axios.defaults.withCredentials = true;

export async function directUploadStart(fileName, fileType) {
  try {
    const response = await axios.post(
      `${ridebackendURL}/api/files/upload/direct/start/`,
      { file_name: fileName, file_type: fileType }
    );
    console.log(response);
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to start the upload process! ☹️`
    );
  }
}
