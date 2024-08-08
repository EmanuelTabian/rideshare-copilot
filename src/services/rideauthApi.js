import axios from "axios";
const ridebackendURL = "http://127.0.0.1:8000/api";

axios.defaults.withCredentials = true;

export async function signup(userdata) {
  try {
    const response = await axios.post(`${ridebackendURL}/register`, userdata);
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} You were unable to sign up! ☹️`);
  }
}

export async function userUpdate(userdata) {
  console.log(userdata);
  try {
    await axios.put(`${ridebackendURL}/user-update`, userdata);
  } catch (err) {
    throw new Error(
      `${err.message} You were unable to update your credentials! ☹️`
    );
  }
}

export async function signin({ email, password }) {
  try {
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
    return response.data;
  } catch (err) {
    throw new Error(`${err.message} Couldn't fetch the user!`);
  }
}

export async function logout() {
  try {
    await axios.post(`${ridebackendURL}/logout`);
  } catch (err) {
    throw new Error(`${err.message} Couldn't logout, please try again!`);
  }
}
