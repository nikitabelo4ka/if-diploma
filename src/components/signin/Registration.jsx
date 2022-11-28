import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import IconsSVG from '../../assets/images/sprite.svg';
import './registration.css';

function Registration() {
  const writeOpenedPage = useOutletContext();

  const [isChecked, setIsChecked] = useState(false);

  function setCheckboxValue() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  function checkData(event, check) {
    event.preventDefault();

    const isCheck = true;

    if (check === isCheck) {
      sessionStorage.setItem('isSignIn', 'true');
      window.location.replace('/');
    }
  }

  useEffect(() => {
    writeOpenedPage('other');
  }, []);

  return (
    <form className="registration" onSubmit={(event) => checkData(event, isChecked)}>
      <div className="registration-form-header">
        <p className="registration-header-name">CREATE ACCOUNT</p>
        <Link to="/">
          <svg className="registration-header-remove-icon">
            <use xlinkHref={`${IconsSVG}#remove-icon`} />
          </svg>
        </Link>
      </div>
      <div className="registration-inputs-wrapper">
        <input
          className="registration-input"
          type="text"
          placeholder="First Name"
          autoComplete="on"
          required
        />
        <input
          className="registration-input"
          type="text"
          placeholder="Last Name"
          autoComplete="on"
          required
        />
        <input className="registration-input" type="email" placeholder="Email" autoComplete="on" required/>
        <input className="registration-input" type="password" placeholder="Password" required/>
        <div className="registration-checkbox-wrapper">
          <input
            className="registration-input-checkbox"
            type="checkbox"
            id="registration-checkbox"
            value={isChecked}
            onChange={setCheckboxValue}
            required
          />
          <label className="registration-label-checkbox" htmlFor="registration-checkbox">
            Let's get personal! We'll send you only the good stuff:
            <br />
            Exclusive early access to Sale, new arrivals and promotions. No nasties.
          </label>
        </div>
      </div>
      <p className="registration-subscription">
        By signing up you agree to Terms of Service and Privacy Policy
      </p>
      <button className="registration-button" type="submit">
        SIGN UP
      </button>
      <Link to="/sign_in" style={{ textDecoration: 'none' }}>
        <p className="registration-account-button">I HAVE AN ACCOUNT</p>
      </Link>
    </form>
  );
}

export default Registration;

// if(firtName === defaultFirstName && lastName === defaultLasttName && email === defaultEmail && password === defaultPassword && check === isCheck) {
//     sessionStorage.setItem('isRegistered', 'true');
//     window.location.replace('/');
// } else {

// }
// }
