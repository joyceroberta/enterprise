import axios from "axios";
import { goToHomeAdm } from "../router/coordinator";
import { baseUrl } from "./constants";

const token = localStorage.getItem("token");
const axiosConfig = {
  headers: {
    auth: token,
  },
};

export const createTrip = (body, history) => {
  axios
    .post(`${baseUrl}/trips`, body, axiosConfig)
    .then((response) => {
      alert("Viagem incluída com sucesso!!!");
      console.log(response);
      goToHomeAdm(history);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
