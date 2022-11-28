import React from 'react';

function FooterListItem({ name }) {
  return (
    <li className="footer-list-item">
      <a className="footer-list-link" href="">
        {name}
      </a>
    </li>
  );
}

export default FooterListItem;
