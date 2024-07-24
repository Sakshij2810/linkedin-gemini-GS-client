import "./SheetData.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSheetData } from "../../actions/sheetAction.js";
import {
  createGeminiResponse,
  geminiToDatabase,
} from "../../actions/geminiAction.js";

const SheetData = () => {
  const dispatch = useDispatch();

  const { loading, sheetData, error } = useSelector((state) => state.sheetData);
  const { content } = useSelector((state) => state.geminiContent);
  const user = useSelector((state) => state.currentUser);

  const [sheetId, setSheetId] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrls, setImgUrls] = useState([]);

  const handleFetchData = () => {
    dispatch(fetchSheetData(sheetId));
  };

  const geminiData = {
    user: user?.profile?.displayName,
    title,
    imageUrls: imgUrls,
    response: content,
  };

  useEffect(() => {
    if (sheetData && sheetData.length > 0) {
      const [firstRow] = sheetData;
      setTitle(firstRow[0]);

      const urls = firstRow[1]
        ? firstRow[1].split(",").map((url) => url.trim().replace(/"/g, "")) // Remove any quotes and trim whitespace
        : [];
      setImgUrls(urls);
    }
  }, [sheetData]);

  useEffect(() => {
    if (title && imgUrls.length > 0) {
      dispatch(createGeminiResponse(title, imgUrls));
    }
  }, [title, imgUrls, dispatch]);

  useEffect(() => {
    if (user && title && imgUrls.length > 0 && content) {
      dispatch(geminiToDatabase(geminiData));
    }
  }, [user, title, imgUrls, content, dispatch]);

  return (
    <div className="sheet-data-container">
      <h1>Fetch Google Sheets Data</h1>
      <div className="sheet-content">
        <input
          type="text"
          placeholder="Enter Sheet ID"
          value={sheetId}
          onChange={(e) => setSheetId(e.target.value)}
        />

        <button onClick={handleFetchData} disabled={loading}>
          Fetch Data
        </button>
      </div>
      {content && <p style={{ padding: "1rem 5rem" }}>{content}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SheetData;
