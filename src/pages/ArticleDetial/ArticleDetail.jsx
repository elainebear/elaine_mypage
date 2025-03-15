import { useParams, Link } from "react-router-dom";
//import { Suspense, lazy } from "react";
import { Suspense, lazy } from "react";


function ArticleDetail() {
    const { id } = useParams(); // 取得網址上的 `id`
    const ArtworkComponent = lazy(() => import(`./Article_folder/artwork${id}.jsx`).catch(() => ({ default: NotFound })));

    function NotFound() {
        return <p>找不到該文章</p>
    }

    return (
        
        <div class="body-items">
            <p>
                <Link to="/articles" class="return"> 返回文章列表 </Link>
            </p>
            <h1>這是文章 {id} 的詳細內容</h1>
            <Suspense fallback={<p>載入中...</p>}>
                <ArtworkComponent/>
            </Suspense>
        </div>
        
    ); 
}

export default ArticleDetail;
