import { useParams, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

//connect to firebase
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

function CollectionDetail() {
    const { id } = useParams(); // 取得網址上的 `id`

    const [collection, setCollection] = useState(null);
    //const ArtworkComponent = lazy(() => import(`./Collection_folder/artwork${id}.jsx`).catch(() => ({ default: NotFound })));

    //function NotFound() {
    //    return <p>找不到該作品</p>
    //}
    useEffect(() => {
        const fetchCollection = async () => {
            const docRef = doc(db, "collections", id); // 假設你的 collection 叫 articles
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
            {/*<Suspense fallback={<p>載入中...</p>}>*/}
            {/*    <ArtworkComponent/>*/}
            {/*</Suspense>*/}
        </div>
        
    ); 
}

export default CollectionDetail;
