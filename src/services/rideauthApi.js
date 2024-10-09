import axios from "axios";
// export const ridebackendURL = "https://api.rideshare-copilot.eu/api";

export const ridebackendURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

export async function signup(userdata) {
  try {
    const response = await axios.post(`${ridebackendURL}/register`, userdata);

    return response.data;
  } catch (err) {
    throw new Error(`${err.message} You were unable to sign up! ☹️`);
  }
}

export async function userUpdate({ userdata }) {
  try {
    await axios.put(`${ridebackendURL}/user-update`, userdata);
  } catch (err) {
    throw new Error(
      `${err.message} You were unable to update your credentials! ☹️`
    );
  }
}

export async function signin(data) {
  const { email, password } = data;

  try {
    const response = await axios.post(`${ridebackendURL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(
      `${err.response.data.detail || "We were unable to sign you in!"}`
    );
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

export async function deleteUser() {
  try {
    await axios.delete(`${ridebackendURL}/user-delete`);
  } catch (err) {
    throw new Error(
      `${err.message} Couldn't remove de account, please try again!`
    );
  }
}
