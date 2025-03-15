import { Link } from "react-router-dom";
function Articles() {
    const articles = [
        { id: 1, title: "文章 1" },
        { id: 2, title: "文章 2" },
        { id: 3, title: "文章 3" },
        { id: 4, title: "文章 4" },
        { id: 5, title: "文章 5" },
        { id: 6, title: "文章 6" }];

    return (
        <div class="body-items">
            <div class="articles">
                {articles.map((articles) => (
                    
                    <Link to={`/articles/${articles.id}`} key={Articles.id} class="articles-items">
                        {articles.title}
                    </Link>
                ))}


            </div>
            {/*<h1>這是文章列表</h1>*/}
        </div>

    );
}
export default Articles;
