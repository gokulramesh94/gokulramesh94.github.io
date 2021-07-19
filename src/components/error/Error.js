import React from "react";
import Image from "../Image/Image";
import Strings from "../../constants/Strings";
import { Link } from "react-router-dom";
import ErrorImage from "../../assets/img/404-error.jpg";
import {
  errorpageWrapper,
  errorpageContents,
  imageWrapper,
} from "./Error.module.scss";

function ErrorScreen() {
  return (
    <div className={errorpageWrapper}>
      <div className={errorpageContents}>
        <div className={imageWrapper}>
          <Image source={ErrorImage} altText="404 - Error" />
        </div>
        <Link to={Strings.ROUTES.HOME}>Go to Home Page</Link>
      </div>
    </div>
  );
}

export default ErrorScreen;
