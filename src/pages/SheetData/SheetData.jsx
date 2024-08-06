import "./SheetData.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSheetData, getSheetId } from "../../actions/sheetAction.js";
import {
  createGeminiResponse,
  geminiToDatabase,
} from "../../actions/geminiAction.js";

const SheetData = () => {
  const dispatch = useDispatch();

  const { loading, sheetData, error } = useSelector((state) => state.sheetData);
  const { content } = useSelector((state) => state.geminiContent);
  const user = useSelector((state) => state.currentUser);
  console.log(user);
  const { sheetIdData } = useSelector((state) => state.sheetIdData);
  // const { sheetIdFromDatabase } = useSelector(
  //   (state) => state.sheetIdFromDatabase
  // );

  const [sheetId, setSheetId] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const [previousSheetData, setPreviousSheetData] = useState([]);

  const emailId = user?.googleProfile.emails[0].value;

  const geminiData = {
    user: user?.googleProfile?.displayName,
    title,
    imageUrls: imgUrls,
    response: content,
  };

  const sheetIdToDatabase = {
    user: user?.googleProfile?.displayName,
    title,
    imageUrls: imgUrls,
    sheetId: sheetId,
    email: user?.googleProfile.emails[0].value,
  };

  const handleSheetClick = () => {
    if (sheetId) {
      dispatch(fetchSheetData(sheetId));
    }
  };

  //set variables
  useEffect(() => {
    if (
      sheetData &&
      sheetData.length > 0 &&
      JSON.stringify(sheetData) !== JSON.stringify(previousSheetData)
    ) {
      setPreviousSheetData(sheetData);

      const [firstRow] = sheetData;
      setTitle(firstRow[0]);

      const urls = firstRow[1]
        ? firstRow[1].split(",").map((url) => url.trim().replace(/"/g, "")) // Remove any quotes and trim whitespace
        : [];
      setImgUrls(urls);
    }
  }, [sheetData, previousSheetData]);

  //create Gemini Response
  useEffect(() => {
    if (title && imgUrls.length > 0) {
      dispatch(createGeminiResponse(title, imgUrls));
    }
  }, [title, imgUrls, dispatch]);

  //gemini To Database
  useEffect(() => {
    if (user && title && imgUrls.length > 0 && content) {
      dispatch(geminiToDatabase(geminiData));
    }
  }, [user, title, imgUrls, content, dispatch]);

  //fetch Sheet Data
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (sheetId) {
  //       dispatch(fetchSheetData(sheetId));
  //     }
  //   }, pollingInterval);

  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [sheetId, dispatch]);

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

        <button onClick={handleSheetClick}>Fetch Sheet Data</button>
      </div>
      <h4>
        Your Sheet Id:{" "}
        {sheetId ? (
          <span style={{ color: "gray" }}>{sheetId}</span>
        ) : (
          <span style={{ color: "red" }}>No Id Yet</span>
        )}
      </h4>
      {content && <p style={{ padding: "1rem 5rem" }}>{content}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SheetData;
