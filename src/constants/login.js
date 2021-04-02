import axios from "axios"
import { goToHomeAdm } from "../router/coordinator";
import {baseUrl} from "./constants"

const token = localStorage.getItem("token");

export const login = (body, history) => {
    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHomeAdm(history);
      })

      .catch((error) => {
        console.log(error.message);
      });
}