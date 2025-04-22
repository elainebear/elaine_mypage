import { Link } from "react-router-dom";
import { useState, Suspense, lazy, useEffect } from "react";
import './Home.scss'


import UsaArticles from "./useArticles";

const ArticleList = lazy(() => import("./ArticleList"));


function Articles() {
    const [query, setQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = UsaArticles();

    // 用搜尋框的文字即時搜尋 <input/>
    const filterArticles = articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
    let heading = 'No article found';
    const count = query ? filterArticles.length : articles.length;
    
    if (count > 0) {
        const noun = count > 1 ? 'articles' : 'article';
        heading = query
            ? count + ' ' + noun + ' matching your search  '
            : count + ' ' + noun;
    } 

    // 用 JS 內建sort 函式排列
    const sortedArticles = [...filterArticles].sort((a, b) =>
        sortOrder === "newest"
        ? b.date - a.date
        : a.date - b.date
    );


    //---
    return (
        <section className="body-items">
            <p>
                <Link to="/" className="return"> 返回首頁</Link>
            </p>
            <h3 className="heading"> {heading} </h3>
            <div className="flex-container">
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="搜尋文章標題"
                />
                <div className="select-wrapper">
                    <select
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}>
                        <option value="newest">最新</option>
                        <option value="oldest">最舊</option>
                    </select>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {sortedArticles.length > 0 ? (
                    sortedArticles.map((articles) => (   
                        <Link to={`/articles/${articles.id}`} key={articles.id}/*className="articles-items"*/>
                            <ArticleList article={articles} />
                        </Link>
                    ))
                ) : <h3>沒有符合的文章:( </h3>}
            </Suspense>
        </section>

    );
}
export default Articles;
