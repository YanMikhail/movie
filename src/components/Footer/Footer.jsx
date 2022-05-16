import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
