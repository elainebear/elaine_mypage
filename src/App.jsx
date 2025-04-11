import './App.css'
import { useEffect, useState } from "react"
import MainApp from './MainApp';
import FullPageLoader from './FullPageLoader';

function App() {
    const [slideOut, setSlideOut] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideOut(true);
        }, 1500); 

        const removeLoader = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeLoader);
        }
    }, []);

    return (
        <>
            <MainApp /> {/* 主畫面先 render！ */}
            {showLoader && <FullPageLoader slideOut={slideOut} />}
        </>);

}

export default App
