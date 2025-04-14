function ArticleCard({ article }) {
    return (
        <div className="card-item">
            <div className="cardPic"></div>
            <h2 className="card-title"><b>{article.title}</b></h2>
            <p className="card-date">Date: {article.date.toLocaleDateString()}</p>
            <p>{article.abstr}</p>
        </div>
        
    );
}
export default ArticleCard;