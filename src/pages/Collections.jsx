import { Link } from "react-router-dom";

//connect to firebase
import { db } from "../firebase.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function Collections() {
    const [collections, setCollection] = useState([]);

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

    let heading = 'No collection';
    const count = collections.length;
    if (count > 0) {
        const noun = count > 1 ? 'Collections' : 'Collection';
        heading = count + ' ' + noun;
    }

    return (
        <section className="body-items">
            <h3 className="heading"> { heading } </h3>
            <div className="collections">
                {collections.map((collections) => (
                    <Link to={`/collections/${collections.id}`} key={collections.id} className="collections-items">
                        {collections.c_title}
                    </Link>  
                ))}
                
            </div>
            
        </section>
    );

}
export default Collections;
