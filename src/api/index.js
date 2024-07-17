import axios from "axios";

const API = axios.create({
  baseURL: "https://linkedin-gemini-gs-server.onrender.com",
});

//auth API
export const fetchSheetDataApi = () => API.get("/api/v1/sheets");
