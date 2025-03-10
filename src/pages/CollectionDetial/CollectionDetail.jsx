import { useParams, Link } from "react-router-dom";

function CollectionDetail() {
    const { id } = useParams(); // 取得網址上的 `id`

    return (
        <h1>這是作品 {id} 的詳細內容</h1>
    ); 
}

export default CollectionDetail;
