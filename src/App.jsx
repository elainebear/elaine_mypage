import './App.css'
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetial/ArticleDetail";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetial/CollectionDetail";

import {HashRouter, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {useState } from "react"
function App() {
    const [isActive, setIsActive] = useState(false);
    const closeMenu = () => {
        setIsActive(false);
    };
    return (
        //basename = "/elaine_mypage"
        <HashRouter>
            <div class="container-header">
                <header>
                    <h3>我的部落格</h3>
                    <button class="menu-toggle" onClick={() => setIsActive(!isActive)}>&#9776;</button>
                    <nav class={isActive?"active":"" }> 
                        <Link to="/" onClick={closeMenu}> Home </Link> 
                        <Link to="/articles" onClick={closeMenu}> Artcles </Link>
                        <Link to="/collections" onClick={closeMenu}> Collections </Link>
                    </nav>
                </header>
            </div>
            <div class="container-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<ArticleDetail />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/collections/:id" element={<CollectionDetail />} /> 
                </Routes>
            </div>
            <div class="container-footer">
                <footer>
                    <a href="https://elainebear.github.io/elaine_mypage/" target="_blank">Elaine Lin</a>
                    <p>Copyright &copy; 2025 Elaine Lin </p>
                </footer>
            </div>
            
        </HashRouter>
        

  )
}

export default App
