import React from "react";
import ReactDOM from "react-dom/client";
import Page2 from "./App2";
import Header from "../Header";
import '../index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Page2 />
    </React.StrictMode>
);
