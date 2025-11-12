import * as React from "react";
import MainForm from "./mainForm";
import { HashRouter, Routes, Route } from "react-router-dom";


function Main() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainForm />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default Main;
