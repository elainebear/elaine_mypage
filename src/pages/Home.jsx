import './Home.scss'
import '../loader.scss'
import { useRef, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import HeroText from "../HeroText.jsx";
//import { toggleTheme } from "../store/themeSlice";
import UseArticles from "./useArticles";
import useCollections from "./useCollections";
import ArticleCard from './ArticleCard';
import CollectionSlider from './CollectionSlider';



function Home() {
    const contentRef = useRef(null);
    const [imgError, setImgError] = useState(false);
    //const dispatch = useDispatch();
    //const theme = useSelector((state) => state.theme.mode);


    const scrollToContent = () => {
        contentRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // 滾動完成後微調偏移
        setTimeout(() => {
            window.scrollBy(0, -35); // 微調偏移
        }, 500); // 延遲時間與 scrollIntoView 的動畫時間相同
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = UseArticles();
    const previewArticles = articles.sort((a, b) => b.date - a.date).slice(0, 3);
    const collections = useCollections();
    const previewCollections = collections.sort((a, b) => b.date - a.date).slice(0, 3);

    const pic = './image/me.jpg';
    return (
        <div className="hero-layout ${theme}" >
            

            <div className="hero-section">
                <HeroText />
                <button onClick={scrollToContent} aria-label="scrolltocontent" className="hero-section__button">
                    <font>⭣</font>
                </button>
            </div>
            {/*<button onClick={() => dispatch(toggleTheme())} className="button hero-layout__button--switchTheme">*/}
            {/*    切換主題（目前：{theme}）*/}
            {/*</button>*/}

            <div className="body-items" ref={contentRef} id="homeContent">
                <div className="about_me">
                    <h1 id="about_me_title">About me</h1>
                    <div className="about_me-items " id="self-img">
                        {!imgError
                            ? (<img src={pic} onError={() => setImgError(true)} className="mypic"></img>)
                            : (<font> 現在還沒有圖片唷⭐⭐ </font>)
                            }
                        
                    </div>
                    <div className="about_me-items " id="self-des">
                        <div className="des-font">
                            <p>Hi there, I'm Elaine ♡ Welcome to my little blog corner~</p>
                            <p>As you can see, this place is still a work in progress🛠️ </p>
                            <p>But I'm working hard behind the scenes! </p>
                            <p>Hope to see you again soon with a cuter look✨</p>
                        </div>
                        
                        <div className="des-web">
                            <a href="https://www.notion.so/1e0f76ff11e7809ca322cde3445690eb" target="_blank">Notion</a> 
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
                        <h2 className="content_h2">Latest Posts</h2>
                        <div className="articleContent" >
                            {previewArticles.map((article) => (
                                <Link to={`/articles/${article.id}`} key={article.id}>
                                    <ArticleCard article={article }></ArticleCard>
                                </Link>
                            ))}
                        </div>
                        <Link to={`/articles`} className="articlePreview__button--article">
                            Explore all articles ✨
                        </Link>
                    </div>

                    <div className="collectionPreview">
                        <h2 className="content_h2">New Posts</h2>

                        {previewCollections.length > 0 && (
                            <CollectionSlider collections={previewCollections} />
                        )}
                        <Link to={`/collections`} className="collectionPreview__button--collection">
                            Explore all works ✨
                        </Link>
                    </div>        
                </div>
            </div>
        </div>
    ); 
}
export default Home;
