import './Home.css'
import '../loader.css'
import HeroText from "../HeroText.jsx";

function Home() {

    return (
        <div className="hero-layout">
            <div className="hero-section">
                    <HeroText />
            </div>
        
            <div className="body-items">
                <div className="about_me">
                    <h3>About me</h3>
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
                <div className="media-type">
                    <button className="media-type-btn">全部</button>
                    <button className="media-type-btn">貼文</button>
                    <button className="media-type-btn">影片</button>   
                </div>

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
