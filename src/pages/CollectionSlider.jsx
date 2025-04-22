import './Home.scss';
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import UseCollections from './useCollections';

function CollectionSlider({ collections }) {
    // 用於無縫輪播的延伸資料
    const extendedCollections = collections.length >= 2
        ? [collections[collections.length - 2], collections[collections.length - 1], ...collections, collections[0], collections[1]]
        : [...collections]; // 若作品數不足就直接原陣列


    const [currentInd, setCurrentInd] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null); // 用來儲存 interval id

    //響應式，決定一次要呈現一張還是兩張投影片
    const [visibleSlides, setVisibleSlides] = useState(2);

    useEffect(() => {
        const updateVisibleSlides = () => {
            const width = window.innerWidth;
            if (width < 550) {
                setVisibleSlides(1); // 手機只顯示一張
            } else {
                setVisibleSlides(2); // 平板以上顯示兩張
            }
        };

        updateVisibleSlides();
        window.addEventListener("resize", updateVisibleSlides);

        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);
    const slideWidth = 100 / visibleSlides;

    // 自動播放功能，當頁面可見時啟動，縮起來時暫停
    useEffect(() => {
        const startAutoPlay = () => {
            // 保險起見先清掉現有 interval
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (!isTransitioning) {
                    setCurrentInd((prevInd) => prevInd + 1);
                }
            }, 3000);
        };
        const stopAutoPlay = () => {
            clearInterval(intervalRef.current);
        };
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                startAutoPlay(); 
            } else {
                stopAutoPlay();  
            }
        };

        startAutoPlay();
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            stopAutoPlay();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [isTransitioning]);

    // 當滑動事件結束後索引的數字為0 或最後一號時切換到真的第一與最後一張圖片
    useEffect(() => {
        const handleTransitionEnd = () => {
            if (currentInd === 0) {
                setIsAnimating(false);
                setCurrentInd(collections.length);
            } else if (currentInd === extendedCollections.length - 2) {
                setIsAnimating(false);
                setCurrentInd(2); // 對應延伸了兩個
            }
            setIsTransitioning(false);
        };
        const wrapper = sliderRef.current;
        wrapper.addEventListener("transitionend", handleTransitionEnd); // 監控該元素的transitioned DOM 動畫事件
        return () => wrapper.removeEventListener("transitionend", handleTransitionEnd);
    }, [currentInd, collections.length, extendedCollections.length]);

    //讓transition 暫停一下，跳轉到真圖後再開啟動畫
    useEffect(() => {
        if (!isAnimating) {
            sliderRef.current.offsetHeight; // 透過 offsetHeight 強迫瀏覽器做一次 reflow，刷新 DOM 狀態，讓動畫 transition 可以被重新啟動。
            setIsAnimating(true);
        }
    }, [isAnimating]);

    useEffect(() => {
        // 當視窗尺寸變化（例如縮放或裝置旋轉）時為了避免偏移錯亂，重置 index 回初始值
        const handleResize = () => {
            setCurrentInd(1); // 回第一張
        };

        // 當瀏覽器標籤頁從隱藏變為可見（例如最小化再打開）
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                // 這裡觸發 reflow（offsetHeight）確保 transition 可以重新作用
                sliderRef.current?.offsetHeight;
                setCurrentInd((prev) => prev); // 強制 React 做重新渲染
            }
        };
        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        if (currentInd >= extendedCollections.length) {
            setCurrentInd(1);
        }
    }, [currentInd, extendedCollections.length]);

    const goToSlide = (index) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentInd(index + 1);
        }
    };
    // 下一仗
    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentInd((prev) => prev + 1);
        }
    };
    // 上一張
    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentInd((prev) => prev - 1);
        }
    };
    

    return (
        <div className="slider">
            <div
                ref={sliderRef}
                className="slider-wrapper"
                style={{
                    transform: `translateX(-${currentInd * slideWidth}%)`,
                    transition: isAnimating ? "transform 0.5s ease" : "none",
                }}
            >
                {extendedCollections.map((collection, index) => (
                    collection ? (
                        <Link
                            to={`/collections/${collection.id}`}
                            key={`${collection.id}-${index}`}
                            className="slide"
                            style={{ flex: `0 0 calc((100% - ${20 * visibleSlides}px) / ${visibleSlides})`, }}

                        >
                            {/*<p>{collection.c_title}</p>*/}
                            {/*<p>{collection.date.toLocaleDateString()}</p>*/}
                            {collection.src ? collection.src : <div className="slide__pic">{collection.c_title}</div>}
                        </Link>
                    ) : null
                ))}
            </div>

            <button className="arrow left" onClick={prevSlide} disabled={isTransitioning}>❮</button>
            <button className="arrow right" onClick={nextSlide} disabled={isTransitioning}>❯</button>

            <div className="dots">
                {collections.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentInd - 2 ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default CollectionSlider;
