import PropTypes from "prop-types";
import "./Main.css";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";

function Main({
  searchResults,
  isLoading,
  errorMessage,
  visibleCount,
  onShowMore,
  hasSearched,
  isLoggedIn,
  handleNewsSaved,
  handleRemoveArticle,
  savedArticles,
}) {
  return (
    <main className="main">
      {isLoading && <Preloader />}
      {!isLoading && hasSearched && (
        <NewsCard
          articles={searchResults}
          errorMessage={errorMessage}
          visibleCount={visibleCount}
          onShowMore={onShowMore}
          isLoggedIn={isLoggedIn}
          handleNewsSaved={handleNewsSaved}
          handleRemoveArticle={handleRemoveArticle} //
          savedArticles={savedArticles}
        />
      )}
      <About />
    </main>
  );
}

Main.propTypes = {
  searchResults: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  visibleCount: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired,
  hasSearched: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  handleNewsSaved: PropTypes.func.isRequired,
  handleRemoveArticle: PropTypes.func.isRequired,
  savedArticles: PropTypes.array.isRequired,
};

export default Main;
