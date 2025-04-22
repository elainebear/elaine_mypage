function ArticleCard({ article }) {
    return (
        <div className="card">
            <div className="card__pic"></div>
            <h2 className="card__title"><b>{article.title}</b></h2>
            <p className="card__date">Date: {article.date.toLocaleDateString()}</p>
            <p className="card__abstr">{article.abstr}</p>
        </div>
        
    );
}
export default ArticleCard;