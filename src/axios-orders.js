import axios from "axios";
import config from "./config";

const instance = axios.create({
  baseURL: config.baseURL,
});

export default instance;
