import './loader.css'

function FullPageLoader({ slideOut }) {

    return (
        <div className="fullscreen-loader-wrapper">
            <div className="cloud" />

            <div className={`fullscreen-loader-r ${slideOut ? "slide-out-r" : ""}`}>
                {/*<div className="spinner"></div>*/}
            </div>
            <div className={`fullscreen-loader-l ${slideOut ? "slide-out-l" : ""}`}>
                {/*<div className="spinner"></div>*/}
            </div>
        </div>

  );
}

export default FullPageLoader
