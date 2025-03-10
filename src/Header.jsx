//import React from "react";
import './App.css'
import './index.css'

function Header() {
    return (
        <header>
            <h3>我的部落格</h3>
            <nav>
                <a href="index.html">首頁</a> |
                <a href="page2.html">文章</a> | 
                <a href="page3.html">作品</a>
            </nav>
        </header>
    );
}

export default Header;
