import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setCurrentUser } from "./actions/setCurrentUserAction.js";

const Home = lazy(() => import("./pages/Home/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const OAuthCallback = lazy(() => import("./pages/OAuthCallback/OAuthCallback"));
const UserDetails = lazy(() => import("./pages/UserDetails/UserDetails.jsx"));
const SheetData = lazy(() => import("./pages/SheetData/SheetData.jsx"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Profile"));

    if (user) {
      // console.log(user);
      dispatch(setCurrentUser(user));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/google/callback" element={<OAuthCallback />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/sheet_data" element={<SheetData />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
