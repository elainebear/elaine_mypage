import { useEffect, useRef, useState } from "react";
import "./App.css";

function HeroText() {
    const containerRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false); // State to track if the element is in the viewport
    const mouseRef = useRef({ x: 0, y: 0 });
    const [text, setText] = useState("STICK TO IT"); // Text state to allow dynamic changes

    useEffect(() => {
        const updateLetters = () => {
            const letters = Array.from(containerRef.current.querySelectorAll(".hero-letter"));
            const letterData = letters.map(letter => ({
                el: letter,
                x: 0,
                y: 0,
                tx: 0,
                ty: 0,
            }));

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsInViewport(true); // Set to true when the element is in view
                    } else {
                        setIsInViewport(false); // Set to false when the element is out of view
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(containerRef.current);

            const update = () => {
                if (!isInViewport) return; // Only update if the element is in viewport

                letterData.forEach(data => {
                    const rect = data.el.getBoundingClientRect();
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;

                    const dx = mouseRef.current.x - cx;
                    const dy = mouseRef.current.y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 120;

                    if (dist < maxDist) {
                        const force = (1 - dist / maxDist) * 40;
                        data.tx = -dx / dist * force;
                        data.ty = -dy / dist * force;
                    } else {
                        data.tx = 0;
                        data.ty = 0;
                    }

                    data.x += (data.tx - data.x) * 0.1;
                    data.y += (data.ty - data.y) * 0.1;

                    data.el.style.transform = `translate(${data.x}px, ${data.y}px)`;
                });

                requestAnimationFrame(update);
            };

            update();

            const onMouseMove = (e) => {
                mouseRef.current.x = e.clientX;
                mouseRef.current.y = e.clientY;
            };

            window.addEventListener("mousemove", onMouseMove);
            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                observer.disconnect(); // Clean up observer when the component unmounts
            };
        };

        updateLetters(); // Initial call to set everything up

        // Re-run this effect every time the text changes
        setText("Let's Get Started!"); // Example of how to dynamically update the text
        updateLetters(); // Update the letters whenever the text changes

    }, [isInViewport, text]); // Re-run when `text` state changes

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
