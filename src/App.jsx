import './App.css'
//import Home from "./pages/Home";
//import Articles from "./pages/Articles";
//import ArticleDetail from "./pages/ArticleDetial/ArticleDetail";
//import Collections from "./pages/Collections";
//import CollectionDetail from "./pages/CollectionDetial/CollectionDetail";

import {HashRouter, BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import { useState } from "react"
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetial/ArticleDetail"));
const Collections = lazy(() => import("./pages/Collections"));
const CollectionDetail = lazy(() => import("./pages/CollectionDetial/CollectionDetail"));
function App() {
    const [isActive, setIsActive] = useState(false);
    const closeMenu = () => {
        setIsActive(false);
    };
    return (
        //basename = "/elaine_mypage"
        <HashRouter>
            < header>
                <div className="container-header">
                    <h3 className="logo">
                        <Link to="/" onClick={closeMenu}> 我的部落格 </Link> 
                    </h3>
                    <button className="menu-toggle" onClick={() => setIsActive(!isActive)}>&#9776;</button>
                    <nav className={isActive ? "active" : ""}>
                        <NavLink to="/" onClick={closeMenu} > Home </NavLink> 
                        <NavLink to="/articles" onClick={closeMenu}> Artcles </NavLink>
                        <NavLink to="/collections" onClick={closeMenu}> Collections </NavLink>
                    </nav>
                </div>
            </header>
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

export default App
