import './App.css'
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Collections from "./pages/Collections";
import {HashRouter, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from './Header';
function App() {

    return (
        //basename = "/elaine_mypage"
        <HashRouter>
            <header>
                {/*<h3><Link to="/"> 我的部落格 </Link></h3>*/}
                <h3>我的部落格</h3>
                <nav>
                    <Link to="/"> Home </Link> |
                    <Link to="/articles"> Artcles </Link>|
                    <Link to="/collections"> Collections </Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/collections" element={<Collections />} />
            </Routes>
            <footer></footer>
        </HashRouter>
        

  )
}

export default App
