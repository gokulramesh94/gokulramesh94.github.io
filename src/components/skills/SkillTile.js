import React from 'react';

const SkillTile = ({ components, items }) => {
  return (
    <div className="skill-tile-wrapper">
      {items.map((item) => {
        const TagName = components[item.COMPONENT];
        return (
          <div className="icons" key={item.NAME}>
            <TagName />
            <div className="tile-overlay">
              <span className="hover-text">{item.NAME}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillTile;
