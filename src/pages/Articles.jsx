import { Link } from "react-router-dom";
import ArticleList from "./ArticleList.jsx";
import './Home.css'

//connect to firebase
import { db } from "../firebase.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";



function Articles() {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchArticles() {
            const query_allarti = await getDocs(collection(db, "articles"));
            const data = query_allarti.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
            }));
            setArticles(data);
        }
        fetchArticles();
    }, []);

    const filterArticles = articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));

    if (!articles) {
        return <p>Loading...</p>
    }

    let heading = 'No article found';
    const count = query ? filterArticles.length : articles.length;
    
    if (count > 0) {
        const noun = count > 1 ? 'articles' : 'article';

        heading = query
            ? count + ' ' + noun + ' matching your search  '
            : count + ' ' + noun;
    } 
    //---
    return (
        <section className="body-items">
            <h3 className="heading"> {heading} </h3>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="搜尋文章標題"
            />
            {filterArticles.length > 0 ? (
                filterArticles.map((articles) => (
                    <Link to={`/articles/${articles.id}`} key={articles.id}/*className="articles-items"*/>
                        <ArticleList article={articles} />
                    </Link>
                ))
                
            ): <h3>  </h3>}
            
        </section>

    );
}
export default Articles;
