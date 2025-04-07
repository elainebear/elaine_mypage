import { useParams, Link } from "react-router-dom";
import { Suspense, lazy } from "react";


function CollectionDetail() {
    const { id } = useParams(); // 取得網址上的 `id`
    const ArtworkComponent = lazy(() => import(`./Collection_folder/artwork${id}.jsx`).catch(() => ({ default: NotFound })));

    function NotFound() {
        return <p>找不到該作品</p>
    }

    return (
        
        <div class="body-items">
            <p>
                <Link to="/Collections" class="return">返回作品列表</Link>
            </p>
            <h1>這是作品 {id} 的詳細內容</h1>
            <Suspense fallback={<p>載入中...</p>}>
                <ArtworkComponent/>
            </Suspense>
        </div>
        
    ); 
}

export default CollectionDetail;
