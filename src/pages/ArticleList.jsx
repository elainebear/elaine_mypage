function ArticleList({ article }) {
    return (
        <div class="articles-items">
            {/*<p>{article.id}</p>*/}
            <h2><b>{article.title}</b></h2>
            <p>發布日期：{article.date}</p>
        </div>
        
    );
}
export default ArticleList;