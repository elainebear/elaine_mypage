function ArticleList({ article }) {
    return (
        <div className="articles-items">
            {/*<p>{article.id}</p>*/}

            <h2><b>{article.title}</b></h2>
            <p>發布日期：{article.date.toDate().toLocaleDateString()}</p>
            <p>{article.abstr}</p>
        </div>
        
    );
}
export default ArticleList;