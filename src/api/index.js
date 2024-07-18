import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchSheetDataApi = () => API.get("/api/v1/sheets");
export const redirectUserApi = () => API.get("/api/v1/auth/google/callback");
