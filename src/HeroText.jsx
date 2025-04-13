import { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

function HeroText() {
    const containerRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false); // State to track if the element is in the viewport
    const [text, setText] = useState("STICK TO IT"); // Text state to allow dynamic changes
    const mouseRef = useRef({ x: 0, y: 0 });
    
    useEffect(() => {
        
        const updateLetters = () => {
            const letters = Array.from(containerRef.current.querySelectorAll(".hero-letter")); // 在綁定的 DOM 元素中找到 class 名稱符合的子元素存到陣列中
            const letterData = letters.map(letter => ({ //將 letters 裡的每個資料存成一組包含座標的陣列
                el: letter,
                x: 0,
                y: 0,
                tx: 0,
                ty: 0,
            }));

            // 用於觀察某個 DOM 元素是否進入或離開畫面可視區的 API
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => { // 對每個被觀察的元素做處理
                    if (entry.isIntersecting) {
                        setIsInViewport(true); // Set to true when the element is in view
                    } else {
                        setIsInViewport(false); // Set to false when the element is out of view
                    }
                });
            }, { threshold: 0.1 }); //只要有 10% 的元素進入畫面就會觸發 callback
            observer.observe(containerRef.current);

            
            const update = () => {
                if (!isInViewport) return; 

                letterData.forEach(data => { // 對 letterData 中的每一組資料進行以下動作
                    const rect = data.el.getBoundingClientRect(); // getBoundingClientRect() 為取得元素位置的 API
                    const cx = rect.left + rect.width / 2; // 計算字母的中心座標
                    const cy = rect.top + rect.height / 2;

                    const dx = mouseRef.current.x - cx; // 計算滑鼠與元素的距離
                    const dy = mouseRef.current.y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 120;

                    // 當滑鼠與元素距離小於 maxDist時產生排斥效果(寫法來自常見的「反比力道函數設計」)
                    if (dist < maxDist) { 
                        const force = (1 - dist / maxDist) * 40;
                        data.tx = -dx / dist * force;
                        data.ty = -dy / dist * force;
                    } else {
                        data.tx = 0;
                        data.ty = 0;
                    }

                    // 插值平滑移動（慣性效果）
                    data.x += (data.tx - data.x) * 0.1;
                    data.y += (data.ty - data.y) * 0.1;

                    // 更新 DOM 元素的 CSS(從原本的位置偏移data.x data.y px)
                    data.el.style.transform = `translate(${data.x}px, ${data.y}px)`;
                });

                // 持續執行下一幀，使用瀏覽器原生API requestAnimationFrame 讓這個動畫函式在下一幀自動被呼叫，形成一個動畫循環
                requestAnimationFrame(update);
            };

            update();

            const onMouseMove = (e) => {
                mouseRef.current.x = e.clientX;
                mouseRef.current.y = e.clientY;
            };

            window.addEventListener("mousemove", onMouseMove); // 當滑鼠在視窗內移動時，觸發onMouseMove函式

            return () => {
                window.removeEventListener("mousemove", onMouseMove); // 移除滑鼠監聽
                observer.disconnect(); // 停止觀察
            };
        };

        updateLetters(); 

        
        setText("Let's Get Started!"); // 方便重新設定文字的區塊
        updateLetters(); // Update the letters whenever the text changes

    }, [isInViewport, text]);

    return (
        <h1 className="hero-title" ref={containerRef}>
            {text.split(" ").map((word, i, arr) => (
                <span key={i} className="hero-word">
                    {word.split("").map((char, j) => (
                        <span key={j} className="hero-letter">
                            {char}
                        </span>
                    ))}
                    {/* 只有當這不是最後一個單字時，才加上空白 */}
                    {i < arr.length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
           
        </h1>
    );
}

export default HeroText;
