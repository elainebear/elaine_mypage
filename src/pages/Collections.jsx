import { Link } from "react-router-dom";

function Collections() {
    const collections = [
        { id: 1, title: "作品 1" },
        { id: 2, title: "作品 2" },
        { id: 3, title: "作品 3" },
    ];
    return (
        <div class="body-items">
            <div class="collections">
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
                {/*<div class="collections-items">作品</div>*/}
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
