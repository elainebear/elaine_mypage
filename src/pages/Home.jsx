import './Home.css'
import '../loader.css'

function Home() {

    return (
        <div className="hero-layout">
            <div className="hero-section">
                <h1 className="hero-title">STICK TO IT</h1>
            </div>
        
            <div className="body-items">
                <div className="about_me">
                    <div className="about_me-items self-img">照片</div>
                    <div className="about_me-items self-des">
                        <h3>關於我</h3>
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
                <div className="media-type">
                    <button className="media-type-btn">全部</button>
                    <button className="media-type-btn">貼文</button>
                    <button className="media-type-btn">影片</button>   
                </div>

                <div className="content">
                    <div className="sort">
                        <select>
                            <option>由近到遠</option>
                            <option>由遠到近</option>
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
