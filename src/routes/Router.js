import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Main from "../components/Main";
import SignUp from "../components/SignUp";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}>
            <Route index element={<SignUp />} />
          </Route>
          <Route path="main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
