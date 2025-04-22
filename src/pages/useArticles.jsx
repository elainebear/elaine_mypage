import { useEffect, useState } from "react";
//import './Home.scss'

//connect to firebase
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";



function UseArticles() {
    const [articles, setArticles] = useState([]);

    // 從 firebase 抓資料
    useEffect(() => {
        async function fetchArticles() {
            const query_allarti = await getDocs(collection(db, "articles"));
            const data = query_allarti.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
                date: doc.data().date.toDate(), //確保 date 是 JS 日期物件
            }));
            setArticles(data);
        }
        fetchArticles();
    }, []);

    return articles;
}
export default UseArticles;
