import axios from "axios";
import { baseUrl } from "./constants";


export const userApplication = (body, id) => {
    axios
    .post(`${baseUrl}/trips/${id}/apply`, body)
    .then((res)=>{
        alert(res.data.message)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

