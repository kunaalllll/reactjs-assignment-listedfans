import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Main from "../components/Main";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
