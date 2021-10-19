/**
 * axios
 * * file contains axios plugin configuration
 * @returns
 */

import axios from "axios";

const baseUrl:string = "http://localhost:7004"


const instance = axios.create({
    baseURL: baseUrl
})


export default instance