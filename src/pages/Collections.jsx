import { Link } from "react-router-dom";
import './Home.css'
import { useEffect, useState } from "react";
//connect to firebase
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

function Collections() {
    const [collections, setCollection] = useState([]);
    const [query, setQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        async function fetchCollection() {
            const query_coll = await getDocs(collection(db, "collections"));
            const data = query_coll.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
                date: doc.data().c_date.toDate(), //確保 date 是 JS 日期物件
            }));
            setCollection(data);
        }
        fetchCollection();
    }, []);

    const filterCollection = collections.filter(collection => collection.c_title.toLowerCase().includes(query.toLowerCase()));

    let heading = 'No collection found';
    const count = query ? filterCollection.length : collections.length;
    if (count > 0) {
        const noun = count > 1 ? 'collections' : 'collection';
        heading = query
            ? count + ' ' + noun + ' matching your search'
            : count + ' ' + noun;
    }

    const sortedCollections = [...filterCollection].sort((a, b) =>
        sortOrder === "newest"
            ? b.date - a.date
            : a.date - b.date
    );

    return (
        <section className="body-items">
            <h3 className="heading"> {heading} </h3>
            
            <div className="flex-container">
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="搜尋作品標題"
                />
                <div className="select-wrapper">
                    <select
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}>
                        <option value="newest">最新</option>
                        <option value="oldest">最舊</option>
                    </select>
                </div>
            </div>

            <div className="collections">
                {sortedCollections.length > 0 ?
                    (sortedCollections.map((collections) => (
                            <Link to={`/collections/${collections.id}`} key={collections.id} className="collections-items">
                                <p>{collections.c_title}</p>
                                <p>{collections.date.toLocaleDateString()}</p>
                            </Link>
                        ))
                    ) : <h3>沒有符合的作品:0 </h3>
                }
            </div>

        </section>
    );

}
export default Collections;
