import { Link } from "react-router-dom";

function Collections() {
    const collections = [
        { id: 1, title: "作品 1" },
        { id: 2, title: "作品 2" },
        { id: 3, title: "作品 3" },
        { id: 4, title: "作品 4" },
        { id: 5, title: "作品 5" },
        { id: 6, title: "作品 6" },
    ];
    return (
        <div class="body-items">
            <div class="collections">
                {collections.map((collections) => (
                    <Link to={`/collections/${collections.id}`} key={Collections.id} class="collections-items">
                        {collections.title}
                    </Link>  
                ))}
                
            </div>
            
        </div>
    );

}
export default Collections;
