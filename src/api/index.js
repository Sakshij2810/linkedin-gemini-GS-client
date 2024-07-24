import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://linkedin-gemini-gs-server.onrender.com",
});

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//sheet api
export const sendTokenToSheetApi = (token, sheetId) =>
  API.post(`/api/v1/sheet/data`, { token, sheetId }, config);

//auth api
export const redirectUserApi = () => API.get("/api/v1/auth/google/callback");

//gemini api
export const createGeminiResponseApi = (title, imageUrls) =>
  API.post("/api/v1/gemini/generate_content", { title, imageUrls }, config);

export const geminiToDatabaseApi = (geminiData) =>
  API.post("/api/v1/gemini/gemini_database", geminiData, config);

//user api
export const createUserApi = (userData) =>
  API.post("/api/v1/user/create_user", userData, config);
