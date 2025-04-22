import { useEffect, useState } from "react";
//import './Home.scss'

//connect to firebase
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";



function useCollections() {
    const [collections, setCollections] = useState([]);

    // 從 firebase 抓資料
    useEffect(() => {
        async function fetchCollection() {
            const query_coll = await getDocs(collection(db, "collections"));
            const data = query_coll.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                date: doc.data().c_date.toDate(), //確保 date 是 JS 日期物件
            }));
            setCollections(data);
        }
        fetchCollection();
    }, []);

    return collections;
}
export default useCollections;
