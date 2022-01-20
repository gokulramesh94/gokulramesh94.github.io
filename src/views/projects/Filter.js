import React from "react";
import PropTypes from "prop-types";

const Filter = ({ activeFilter, data, onClick }) => {
  return (
    <div className="filter-wrapper">
      <ul className="filters">
        {data.map((filter, index) => {
          return (
            <li
              className={`filter ${
                activeFilter === filter.FILTER ? "active" : ""
              }`}
              key={index}
              onClick={() => onClick(filter.FILTER)}
            >
              <span>{filter.NAME}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filter.defaultProps = {
  data: [],
  activeFilter: "show-all",
};

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  activeFilter: PropTypes.string,
};

export default Filter;
