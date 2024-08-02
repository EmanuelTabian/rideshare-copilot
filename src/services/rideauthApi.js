import axios from "axios";
const ridebackendURL = "http://127.0.0.1:8000/api";

export async function signup(userdata) {
  console.log(userdata);
  try {
    const response = await axios.post(`${ridebackendURL}/register`, userdata);
    console.log(response);

    return response.data;
  } catch (err) {
    throw new Error(`${err.message} You were unable to sign up! ☹️`);
  }
}
