import "./PreLoader.css";

function PreLoader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default PreLoader;
