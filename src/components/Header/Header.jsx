import React from 'react';
import logo from '../../assets/images/1.svg';
function Header() {
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img style={{ width: 170 }} src={logo} alt="Logo" />
          </a>
          <ul className="nav__content">
            <li>
              <a href="/movie">Популярные</a>
            </li>
            <li>
              <a href="/movie/now-playing">Смотрят сейчас</a>
            </li>
            <li>
              <a href="/movie/upcoming">Ожидаемые</a>
            </li>
            <li>
              <a href="/movie/top-rated">Лучшие</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
