import { useParams, Link } from "react-router-dom";
//import { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
//import dayjs from "dayjs";
import { db } from "../../firebase.js";


function ArticleDetail() {
    const { id } = useParams(); // 取得網址上的 `id`
    
    const [article, setArticle] = useState(null);
    //const ArtworkComponent = lazy(() => import(`./Article_folder/artwork${id}.jsx`).catch(() => ({ default: NotFound })));

    //function NotFound() {
    //    return <p>找不到該文章</p>
    //}
    useEffect(() => {
        const fetchArticle = async () => {
            const docRef = doc(db, "articles", id); // 假設你的 collection 叫 articles
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
        return <p></p>
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
