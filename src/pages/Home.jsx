import './Home.css'
import '../loader.css'
import HeroText from "../HeroText.jsx";
import { useRef } from 'react'


function Home() {
    const contentRef = useRef(null);
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

    return (
        <div className="hero-layout">
            <div className="hero-section">
                <HeroText />
                <button onClick={scrollToContent} aria-label="scrolltocontent">
                    <font>⭣</font>
                </button>
            </div>

            <div className="body-items" ref={contentRef}>
                <div className="about_me">
                    <h1 className="about_me_title">About me</h1>
                    <div className="about_me-items self-img">照片</div>
                    <div className="about_me-items self-des">
                        <div>
                            <a href="" target="_blank">Notion 公開筆記</a> 
                        </div>
                        <div>
                            <a href="https://codepen.io/Elaine-the-animator" target="_blank">CodePen</a> 
                        </div>
                        <div>
                            <a href="https://github.com/elainebear" target="_blank">GitHub</a> 
                        </div>
                    </div>
                </div>

                {/*<div className="about_card">*/}
                {/*    <img src="./me.png" ></img>*/}
                {/*    <h3> Elaine Lin</h3>*/}
                {/*    <p>This is an intro about me</p>*/}
                {/*</div>*/}
                {/*<div className="media-type">*/}
                {/*    <button className="media-type-btn">全部</button>*/}
                {/*    <button className="media-type-btn">貼文</button>*/}
                {/*    <button className="media-type-btn">影片</button>   */}
                {/*</div>*/}

                <div className="content">
                    <div className="sort">
                        <select>
                            <option>最新</option>
                            <option>最舊</option>
                            <option>熱門</option>
                        </select>
                    </div>

                    <article></article> 
                    <article></article> 
                    <article></article>                

                </div>
            </div>
        </div>
    ); 
}
export default Home;
