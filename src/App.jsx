import './App.css'
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetial/CollectionDetail";

import {HashRouter, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from './Header';
function App() {

    return (
        //basename = "/elaine_mypage"
        <HashRouter>
            <div class="container-header">
                <header>
                    {/*<h3><Link to="/"> 我的部落格 </Link></h3>*/}
                    <h3>我的部落格</h3>
                    <nav>
                        <Link to="/"> Home </Link> |
                        <Link to="/articles"> Artcles </Link>|
                        <Link to="/collections"> Collections </Link>
                    </nav>
                </header>
            </div>
            <div class="container-body">
                <Routes>
                    {/*<div class="body-items">*/}
                    {/*    <Route path="/" element={<Home />} />*/}
                    {/*</div>*/}
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/collections/:id" element={<CollectionDetail />} /> 
                </Routes>
            </div>
            <div class="container-footer">
                <footer></footer>
            </div>
            
        </HashRouter>
        

  )
}

export default App
