﻿import './App.css'
import {HashRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Header from './Header';

const Home = lazy(() => import("./pages/Home"));
const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetial/ArticleDetail"));
const Collections = lazy(() => import("./pages/Collections"));
const CollectionDetail = lazy(() => import("./pages/CollectionDetial/CollectionDetail"));
function MainApp() {
    return (
        //basename = "/elaine_mypage"
        <HashRouter>
            <Header />
            <div className="container-body">
                <Suspense fallback={<div>Loading...</div> } >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/articles/:id" element={<ArticleDetail />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/collections/:id" element={<CollectionDetail />} />
                    </Routes>
                </Suspense>
            </div>

            <footer >
                <div className="container-footer">
                    <a href="https://elainebear.github.io/elaine_mypage/" target="_blank">Elaine Lin</a>
                    <p>Copyright &copy; 2025 Elaine Lin </p>
                </div>
            </footer > 
        </HashRouter>
       
  )
}

export default MainApp
