/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOTA2_LOGO_HORIZ_PNG, STEAM_ICON_SVG } from '../../assets/images';

const Layout = props => {
  const { children } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-light pl-0 pr-0 navbar-desktop">
        <img src={DOTA2_LOGO_HORIZ_PNG} alt="Dota 2 Logo" className="dota-logo hover-ob1" />
        {/* <img src={DOTA2_LOGO_SYMBOL_PNG} alt="Dota 2 Logo" className="dota-logo small" /> */}
        <div className="navbar-navitems">
          <div className="dot dropdown show">
            <h2
              className="nav-item hover-ob1 nav-dropdown"
              data-toggle="dropdown"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              Game
            </h2>
            <div className={`${showDropDown ? 'dropdown-active' : 'dropdown-inactive'}`}>
              <a
                className="dropdown-item hover-ob1"
                href="https://www.dota2.com/store"
                target="_blank"
                rel="noreferrer"
              >
                Store
              </a>
              <Link className="dropdown-item hover-ob1" to="/">
                Patches
              </Link>
              <Link className="dropdown-item hover-ob1" to="/">
                News
              </Link>
            </div>
          </div>
          <div>
            <Link to="/">
              <h2 className="nav-item hover-ob1">Heroes</h2>
            </Link>
          </div>
          <div>
            <Link to="/">
              <h2 className="nav-item hover-ob1">News</h2>
            </Link>
          </div>
        </div>

        <div className="navbar-login">
          <h3 className="hover-ob1">Login</h3>
          <div className="steam-play-for-free">
            <img src={STEAM_ICON_SVG} alt="" />
            <h2 className="steam-button">Play for Free</h2>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Layout;
