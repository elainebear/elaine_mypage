import { useParams, Link } from "react-router-dom";
import '../Home.css'
import { useEffect, useState } from "react";
//connect to firebase

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";


function ArticleDetail() {
    const { id } = useParams(); // 取得網址上的 id
    const [article, setArticle] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const fetchArticle = async () => {
            const docRef = doc(db, "articles", id); // firebase collection 名字(articles)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setArticle(docSnap.data());
            } else {
                console.log("No such article!");
            }
        };

        fetchArticle();
    }, [id]);
    if (!article) {
        return <p>Loading...</p>
    }
    return (
        
        <div className="body-items">
            <p>
                <Link to="/articles" className="return"> 返回文章列表 </Link>
            </p>
            <h1>{article.title}</h1>
            <p>發布日期：{article.date.toDate().toLocaleDateString()}</p>
            <div>{article.content}</div>

        </div>
        
    ); 
}

export default ArticleDetail;
