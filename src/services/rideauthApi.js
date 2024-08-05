import axios from "axios";
const ridebackendURL = "http://127.0.0.1:8000/api";

export async function signup(userdata) {
  try {
    const response = await axios.post(`${ridebackendURL}/register`, userdata);
    console.log(response);

    return response.data;
  } catch (err) {
    throw new Error(`${err.message} You were unable to sign up! ☹️`);
  }
}

export async function signin({ email, password }) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${ridebackendURL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} You were unable to sign in!`);
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${ridebackendURL}/user`);
    console.log(response);
    return response;
  } catch (err) {
    throw new Error(`${err.message} Couldn't fetch the user!`);
  }
}
