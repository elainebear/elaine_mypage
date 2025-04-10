function ArticleList({ article }) {
    return (
        <div className="articles-items">
            <h2><b>{article.title}</b></h2>
            <p>發布日期：{article.date.toLocaleDateString()}</p>
            <p>{article.abstr}</p>
        </div>
        
    );
}
export default ArticleList;