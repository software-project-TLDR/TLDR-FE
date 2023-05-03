import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Select from "../pages/Select";
import Upload from "../pages/Upload";
import Record from "../pages/Record";
import Result from "../pages/Result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="select" element={<Select />} />
        <Route path="record" element={<Record />} />
        <Route path="upload" element={<Upload />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
