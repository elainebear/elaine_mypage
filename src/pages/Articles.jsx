import { Link } from "react-router-dom";
import ArticleList from "./ArticleList.jsx";
function Articles() {
    const articles = [
        { id: 1, title: "文章 1", date: "2025-03-03" },
        { id: 2, title: "文章 2", date: "2025-01-05" },
        { id: 3, title: "文章 3", date: "2024-10-23" },
        { id: 4, title: "文章 4", date: "2024-10-7" },
        { id: 5, title: "文章 5", date: "2024-9-25" },
        { id: 6, title: "文章 6", date: "2024-8-18" }];

    let heading = 'No article';
    const count = articles.length;
    if (count > 0) {
        const noun = count > 1 ? 'Articles' : 'Article';
        heading = count + ' ' + noun;
    }

    return (
        <section class="body-items">
            <h3 class="heading"> {heading} </h3>

            {articles.map((articles) => (
                <Link to={`/articles/${articles.id}`} key={Articles.id} /*class="articles-items"*/>
                    <ArticleList article={articles} /*key={Articles.id}*/ />
                </Link>
             ))}

            
        </section>

    );
}
export default Articles;
