import { Link } from "react-router-dom";
import './Home.css'

//connect to firebase
import { db } from "../firebase.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function Collections() {
    const [collections, setCollection] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchCollection() {
            const query_coll = await getDocs(collection(db, "collections"));
            const data = query_coll.docs.map((doc) => ({
                id : doc.id,
                ...doc.data(),
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

    return (
        <section className="body-items">
            <h3 className="heading"> {heading} </h3>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="搜尋作品標題"
            />
            <div className="collections">
                {filterCollection.map((collections) => (
                    <Link to={`/collections/${collections.id}`} key={collections.id} className="collections-items">
                        {collections.c_title}
                    </Link>  
                ))}
                
            </div>
            
        </section>
    );

}
export default Collections;
