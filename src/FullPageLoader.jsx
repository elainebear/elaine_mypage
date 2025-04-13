import './loader.css'

function FullPageLoader({ slideOut }) {

    return (
        <div className="fullscreen-loader-wrapper">
            <div className="cloud" />

            <div className={`fullscreen-loader-r ${slideOut ? "slide-out-r" : ""}`}>
            </div>
            <div className={`fullscreen-loader-l ${slideOut ? "slide-out-l" : ""}`}>
            </div>
        </div>

  );
}

export default FullPageLoader
