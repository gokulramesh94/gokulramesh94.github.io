import React, { useState } from "react";
import ImageUnavailable from "../../assets/img/no-image-available.png";
import PropTypes from "prop-types";
import { image, loader, loaderWrapper } from "./Image.module.scss";

const Image = ({ source, altText, fallbackImage }) => {
  const [load, setLoad] = useState(false);

  const addDefaultSrc = (event) => {
    event.target.src = fallbackImage || ImageUnavailable;
    setLoad(true);
  };

  const handleImageLoad = () => {
    setLoad(true);
  };

  return (
    <div>
      {!load ? (
        <div className={loaderWrapper}>
          <div className={loader}></div>
        </div>
      ) : null}
      <img
        className={image}
        src={source}
        alt={altText}
        style={!load ? { display: "none" } : {}}
        onLoad={handleImageLoad}
        onError={addDefaultSrc}
      />
    </div>
  );
};

Image.defaultProps = {
  source: "",
  altText: "",
  fallbackImage: "",
};

Image.propTypes = {
  source: PropTypes.string,
  altText: PropTypes.string,
  fallbackImage: PropTypes.string,
};

export default React.memo(Image);
