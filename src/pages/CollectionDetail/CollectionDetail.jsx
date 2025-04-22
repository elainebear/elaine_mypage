import { useParams, Link } from "react-router-dom";
import '../Home.scss'
import { useEffect, useState } from "react";
//connect to firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

function CollectionDetail() {
    const { id } = useParams(); // 取得網址上的 id
    const [collection, setCollection] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const fetchCollection = async () => {
            const docRef = doc(db, "collections", id); // firebase collection 名字(collections)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setCollection(docSnap.data());
            } else {
                console.log("No such collection!");
            }
        };

        fetchCollection();
    }, [id]);
    if (!collection) {
        return <p>Loading...</p>
    }
    return (
        
        <div className="body-items">
            <p>
                <Link to="/Collections" className="return">返回作品列表</Link>
            </p>
            <h1>{collection.c_title}</h1> 
            <p>發布日期：{collection.c_date.toDate().toLocaleDateString()}</p>
            <div>{collection.c_content}</div>

        </div>
        
    ); 
}

export default CollectionDetail;
