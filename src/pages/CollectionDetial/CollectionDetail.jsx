import { useParams, Link } from "react-router-dom";

function CollectionDetail() {
    const { id } = useParams(); // 取得網址上的 `id`

    return (
        
        <div class="body-items">
            <p>返回作品列表</p>
            <h1>這是作品 {id} 的詳細內容</h1>
        </div>
        
    ); 
}

export default CollectionDetail;
