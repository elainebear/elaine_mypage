import { Link } from "react-router-dom";
import ArticleList from "./ArticleList.jsx";

//connect to firebase
import { db } from "../firebase.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";



function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const querySnapshot = await getDocs(collection(db, "articles"));
            const data = querySnapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
            }));
            setArticles(data);
        }
        fetchArticles();
    }, []);
    //if (!articles) {
    //    return <p>Loading...</p>
    //}


    let heading = 'No article';
    const count = articles.length;
    if (count > 0) {
        const noun = count > 1 ? 'Articles' : 'Article';
        heading = count + ' ' + noun;
    }
    //---
    return (
        <section className="body-items">
            <h3 className="heading"> {heading} </h3>

            {articles.map((articles) => (
                <Link to={`/articles/${articles.id}`} key={articles.id}/*className="articles-items"*/>
                    <ArticleList article={articles}  />
                </Link>
             ))}
        </section>

    );
}
export default Articles;
