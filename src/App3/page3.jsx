import React from "react";
import ReactDOM from "react-dom/client";
import Page3 from "./App3";
import Header from "../Header";
import '../index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Page3 />
    </React.StrictMode>
);
