import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setCurrentUser } from "./actions/setCurrentUserAction.js";

const Home = lazy(() => import("./pages/Home/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const OAuthCallback = lazy(() => import("./pages/OAuthCallback/OAuthCallback")); // Adjust the path as per your project structure

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Profile"));

    if (user) {
      console.log(user);
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
