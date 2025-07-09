import { Link } from "react-router-dom";
import "./NotFound.css"; // Custom CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">Oops! Page Not Found</h2>
      <p className="not-found-message">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="not-found-link">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
