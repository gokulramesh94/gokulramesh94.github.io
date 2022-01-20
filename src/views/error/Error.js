import React from "react";
import Strings from "../../constants/Strings";
import { Link } from "react-router-dom";
import "./Error.scss";

function ErrorScreen() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <Link to={Strings.ROUTES.HOME}>Go TO Homepage</Link>
      </div>
    </div>
  );
}

export default ErrorScreen;
