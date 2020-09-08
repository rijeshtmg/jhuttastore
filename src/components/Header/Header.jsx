import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
function Header() {
  return (
    <header className="main-header flex f-c-sb fill">
      <nav className="main-nav flex f-ai-c">
        <a href="#" className="nav-link flex f-pc">
          <div className="nav-link-text">Mens</div>
          <div className="nav-link-icon-cont flex f-pc">
            <BiChevronDown className="nav-link-icon" />
          </div>
        </a>
        <a href="#" className="nav-link flex f-pc">
          <div className="nav-link-text">Womens</div>
          <div className="nav-link-icon-cont flex f-pc">
            <BiChevronDown className="nav-link-icon" />
          </div>
        </a>
        <a href="#" className="nav-link flex f-pc">
          <div className="nav-link-text">Childrens</div>
          <div className="nav-link-icon-cont flex f-pc">
            <BiChevronDown className="nav-link-icon" />
          </div>
        </a>
        <a href="#" className="nav-link flex f-pc">
          <div className="nav-link-text">Costomize</div>
          <div className="nav-link-icon-cont flex f-pc">
            <BiChevronDown className="nav-link-icon" />
          </div>
        </a>
      </nav>
      <div className="header-right-menus flex f-ai-c">
        <a href="#" className="cart-link flex f-pc">
          <FiShoppingCart className="cart-icon" />
        </a>
        <div className="search-btn flex f-pc">
          <FiSearch className="search-icon" />
        </div>
        <div className="right-menu-icon-cont dark-bg flex f-pc">
          <div className="right-menu-icon">
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
            <div className="right-menu-box light-bg"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
