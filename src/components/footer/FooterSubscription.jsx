import React, { useState } from 'react';
import { getSubscriptionMessage } from '../../../services/services';

function FooterSubscription() {
  const [emailValue, setEmailValue] = useState('');
  const [successfulResponse, setSuccessfulResponse] = useState('');

  function sendEmail(event) {
    event.preventDefault();

    getSubscriptionMessage(emailValue)
      .then((response) => response.json())
      .then((data) => {
        setSuccessfulResponse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (successfulResponse.message !== undefined) {
    return <div className="successful-response">{successfulResponse.message}</div>;
  }
  return (
    <>
      <div className="footer-subscription">
        <p className="footer-subscription-text-first">SIGN UP FOR UPDATES</p>
        <p className="footer-subscription-text-second">
          Sign up for exclusive early sale access and tailored new arrivals.
        </p>
        <form className="footer-subscription-form" onSubmit={(event) => sendEmail(event)}>
          <input
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
            type="email"
            className="footer-subscription-form-input"
            id="footer-subscription-form-email"
            placeholder="Your email address"
            autoComplete="on"
            required
          />
          <button type="submit" className="footer-subscription-form-button">
            JOIN
          </button>
        </form>
      </div>
    </>
  );
}

export default FooterSubscription;
