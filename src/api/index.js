import axios from "axios";

const API = axios.create({
  baseURL: "https://linkedin-gemini-gs-server.onrender.com",
});

export const fetchSheetDataApi = () => API.get("/api/v1/sheets");
export const redirectUserApi = () => API.get("/api/v1/auth/google/callback");
