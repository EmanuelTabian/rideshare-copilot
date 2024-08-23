import axios from "axios";
import { ridebackendURL } from "./rideauthApi";

axios.defaults.withCredentials = true;

export async function getCalculatorEntries() {
  try {
    const response = await axios.get(
      `${ridebackendURL}/get-calculator-entries`
    );
    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to retrieve your calculator entries! ☹️`
    );
  }
}

export async function addCalculatorEntry({ calcData }) {
  console.log(calcData);

  try {
    const response = await axios.post(
      `${ridebackendURL}/add-calculator-entry`,
      calcData
    );
    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to add your calculator entry! ☹️`
    );
  }
}

export async function updateCalculatorEntry(calcData) {
  const data = {
    app_income: calcData.app_income,
    commission: calcData.commission,
    expenses: calcData.expenses,
    earnings: calcData.earnings,
  };
  const { calculatorEntryID: id } = calcData;
  console.log(data);

  try {
    const response = await axios.patch(
      `${ridebackendURL}/update-calculator-entry/${id}`,
      data
    );
    return response.data;
  } catch (err) {
    throw new Error(
      `${err.message} Sorry, we were unable to edit your calculator entry! ☹️`
    );
  }
}
