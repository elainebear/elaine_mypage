import './App.css'
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetial/ArticleDetail";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetial/CollectionDetail";

import {HashRouter, BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import {useState } from "react"
function App() {
    const [isActive, setIsActive] = useState(false);
    const closeMenu = () => {
        setIsActive(false);
    };
    return (
        //basename = "/elaine_mypage"
        <HashRouter>
            < header>
                <div class="container-header">
                    <h3 class="logo">
                        <Link to="/" onClick={closeMenu}> 我的部落格 </Link> 
                    </h3>
                    <button class="menu-toggle" onClick={() => setIsActive(!isActive)}>&#9776;</button>
                    <nav class={isActive ? "active" : ""}>
                        <NavLink to="/" onClick={closeMenu} > Home </NavLink> 
                        <NavLink to="/articles" onClick={closeMenu}> Artcles </NavLink>
                        <NavLink to="/collections" onClick={closeMenu}> Collections </NavLink>
                    </nav>
                </div>
            </header>
            <div class="container-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<ArticleDetail />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/collections/:id" element={<CollectionDetail />} /> 
                </Routes>
            </div>
            <footer >
                <div class="container-footer">
                    <a href="https://elainebear.github.io/elaine_mypage/" target="_blank">Elaine Lin</a>
                    <p>Copyright &copy; 2025 Elaine Lin </p>
                </div>
            </footer >
            
        </HashRouter>
        

  )
}

export default App
