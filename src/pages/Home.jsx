import './Home.css'

function Home() {
    return (
        <div class="body-items">
            <div class="about_me">
                <div class="self-img">照片</div>
                <div class="self-des">
                    <h3>關於我</h3>
                    <div>Notion 公開筆記</div>
                    <div>CodePen</div>
                    <div>GitHub</div>
                </div>
            </div>
            <div class="media-type">
                <button>全部</button>
                <button>貼文</button>
                <button>影片</button>
            </div>
            {/*<hr/>*/}
            <div class="content">
                <div class="sort">
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
        
    ); 
}
export default Home;
