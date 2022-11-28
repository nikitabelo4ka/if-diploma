import React, { useState } from 'react';
import IconsSVG from '../../assets/images/sprite.svg';
import './dropdown.css';

function DropDownInformation({ information, informationName }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  return (
    <div className="dropdown-information">
      <div className="dropdown-wrapper">
        <svg className="open-dropdown-icon" onClick={() => setIsDropDownActive(!isDropDownActive)}>
          <use xlinkHref={`${IconsSVG}#Union`} />
        </svg>
        <p className="dropdown-information-name">{informationName}</p>
      </div>
      <p className={isDropDownActive ? 'dropdown-information-text' : 'unactive'}>{information}</p>
    </div>
  );
}

export default DropDownInformation;
