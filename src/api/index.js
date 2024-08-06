import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "http://localhost:4000",
});

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//sheet api
export const sendTokenToSheetApi = (token, sheetId) =>
  API.post(`/api/v1/sheet/data`, { token, sheetId }, config);

export const getSheetIdApi = (sheetIdData) =>
  API.post(`/api/v1/sheet/sheet_id`, sheetIdData, config);

// export const getSheetIdFromDatabaseApi = (email) =>
//   API.post(`/api/v1/sheet/getSheetId`, email);

//auth api
export const redirectUserApi = () => API.get("/api/v1/auth/google/callback");
export const redirectLinkedInUserApi = () =>
  API.get("/api/v1/auth/linkedin/callback");

//gemini api
export const createGeminiResponseApi = (title, imageUrls) =>
  API.post("/api/v1/gemini/generate_content", { title, imageUrls }, config);

export const geminiToDatabaseApi = (geminiData) =>
  API.post("/api/v1/gemini/gemini_database", geminiData, config);

//user api
export const createUserApi = (userData) =>
  API.post("/api/v1/user/create_user", userData, config);
