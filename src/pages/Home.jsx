import './Home.css'
import '../loader.css'
import { useRef, useEffect } from 'react'
import HeroText from "../HeroText.jsx";
import UseArticles from "./useArticles.jsx";
import ArticleCard from './ArticleCard';
import { Link } from "react-router-dom";



function Home() {
    const contentRef = useRef(null);
    //const horizontalRef = useRef(null);

    const scrollToContent = () => {
        contentRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // 等待滾動完成後，再微調偏移
        setTimeout(() => {
            window.scrollBy(0, -35); // 微調偏移，這裡 -100 是導覽列的高度
        }, 500); // 延遲時間要與 scrollIntoView 的動畫時間相匹配
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = UseArticles();
    const previewArticles = articles.sort((a, b) => b.date - a.date).slice(0, 3);

    return (
        <div className="hero-layout">
            <div className="hero-section">
                <HeroText />
                <button onClick={scrollToContent} aria-label="scrolltocontent">
                    <font>⭣</font>
                </button>
            </div>

            <div className="body-items" ref={contentRef} id="homeContent">
                <div className="about_me">
                    <h1 id="about_me_title">About me</h1>
                    <div className="about_me-items " id="self-img">照片</div>
                    <div className="about_me-items " id="self-des">
                        <div className="des-font">
                            <p>Hi there, I'm Elaine ♡ Welcome to my little blog corner~</p>
                            <p>As you can see, this place is still a work in progress🛠️ </p>
                            <p>But I'm working hard behind the scenes! </p>
                            <p>Hope to see you again soon with a cuter look✨</p>
                        </div>
                        
                        <div className="des-web">
                            <a href="" target="_blank">Notion</a> 
                        </div>
                        <div className="des-web">
                            <a href="https://codepen.io/Elaine-the-animator" target="_blank">CodePen</a> 
                        </div>
                        <div className="des-web">
                            <a href="https://github.com/elainebear" target="_blank">GitHub</a> 
                        </div>
                    </div>
                </div>

                <div className="content" id="homeArticle">
                    <div className="articlePreview"> 
                        <h2>Latest Posts</h2>
                        <div className="articleContent" >
                            {previewArticles.map((article) => (
                                <Link to={`/articles/${article.id}`} key={article.id}>
                                    <ArticleCard article={article }></ArticleCard>
                                </Link>
                            ))}
                        </div>
                        <Link to={`/articles`} id="btn-allArticles">
                            Explore all articles ✨
                        </Link>
                    </div>          
                </div>
            </div>
        </div>
    ); 
}
export default Home;
