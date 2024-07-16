import axios from "axios";

const API = axios.create({
  baseURL: "https://linkedin-gemini-googlesheet-integration.onrender.com",
});

export const getAllDataApi = () => API.get("/api/v1/data");
