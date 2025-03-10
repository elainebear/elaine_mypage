import React from "react";
import ReactDOM from "react-dom/client";
import Page2 from "./App2";
import Header from "../Header";
import '../index.css'
import {BrowserRouter, Routes} from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root-2")).render(
    <React.StrictMode>
    <BrowserRouter basename = "/elaine_mypage">
        <Header />
        <Page2 />
    </BrowserRouter>
        
    </React.StrictMode>
);
