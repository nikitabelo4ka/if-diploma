import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import IconsSVG from '../../assets/images/sprite.svg';
import './signin.css';

function SignIn() {
  window.scrollTo(0, 0);
  const writeOpenedPage = useOutletContext();

  useEffect(() => {
    writeOpenedPage('other');
  }, []);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function signIn(event, email, password) {
    event.preventDefault();

    const defaultEmail = 'belko.nikita@yandex.ru';
    const defaultPassword = '1111';

    if (defaultEmail === email && defaultPassword === password) {
      sessionStorage.setItem('isSignIn', 'true');
      window.location.replace('/');
    }
  }

  return (
    <form className="sign-in" onSubmit={(event) => signIn(event, emailValue, passwordValue)}>
      <div className="sign-in-form-header">
        <p className="sign-in-header-name">SIGN IN</p>
        <Link to="/registration">
          <svg className="sign-in-header-remove-icon">
            <use xlinkHref={`${IconsSVG}#remove-icon`} />
          </svg>
        </Link>
      </div>
      <div className="sign-in-inputs-wrapper">
        <input
          className="sign-in-input"
          type="email"
          placeholder="Email"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
          autoComplete="on"
          required
        />
        <input
          className="sign-in-input"
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
          required
        />
      </div>
      <button className="sign-in-button" type="submit">
        SIGN IN
      </button>
    </form>
  );
}

export default SignIn;
