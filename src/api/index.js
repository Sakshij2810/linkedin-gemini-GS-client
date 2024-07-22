import axios from "axios";

const API = axios.create({
  baseURL: "https://linkedin-gemini-gs-server.onrender.com",
});

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const sendTokenToSheetApi = (token, sheetId) =>
  API.post(`/api/v1/sheet/data`, { token, sheetId });

export const redirectUserApi = () => API.get("/api/v1/auth/google/callback");

export const createGeminiResponseApi = (title, imageUrls) =>
  API.post("/api/v1/gemini/generate_content", { title, imageUrls }, config);
