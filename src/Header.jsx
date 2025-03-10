import './App.css'
import './index.css'
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Collections from "./pages/Collections";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function Header() {
    return (
        <header>
            {/*<h3>我的部落格</h3>*/}
            {/*<nav>*/}
            {/*    <a href="index.html">首頁</a> |*/}
            {/*    <a href="page2.html">文章</a> | */}
            {/*    <a href="page3.html">作品</a>*/}
            {/*</nav>*/}
            <Router basename = "/elaine_mypage">
                <h3>我的部落格</h3>
                <nav>
                    <a><Link to="/">首頁</Link></a> |
                    <a><Link to="/articles">文章列表 </Link></a> |
                    <a><Link to="/collections">關於我們</Link></a>
                </nav>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/collections" element={<Collections />} />
                </Routes>
                

            </Router>
        </header>
    );
}

export default Header;
