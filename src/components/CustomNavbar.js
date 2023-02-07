import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import { useTranslation } from "react-i18next";

const CustomNavbar = (props) => {
  const { t, i18n } = useTranslation();
  var { mClass, nClass, cClass, slogo, hbtnClass } = props;
  const [lang, setLang] = useState();
  useEffect(() => {
    setLang(i18n.language);
  }, []);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const changeLang = (e) => {
    setLang(e.target.value);
  }
  return (
    // <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-xl menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand mr-0 flex-grow-1 ${slogo}`} to="/">
              <img className="logo-image" src={require("../img/our_logo1.png")} alt="" />
              <img className="logo-image" src={require("../img/our_logo2.png")} alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.products")}
                  </Link>
                  <div className="mega_menu_inner">
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <ul className="dropdown-menu custom-nav-menu mx-lg-0 scroll">
                          <li className="nav-item-title">
                            {t("navmenu.products")}
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">{t("products.platform.title")}</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.fraud&cyber.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.digital_verification.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.digital_identity.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.biometric_multi-factor.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.document_verification.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.biometric_identify.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.age_verification.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("products.biometric_data_protection.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.industries")}
                  </Link>
                  <div className="mega_menu_inner">
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <ul className="dropdown-menu custom-nav-menu mx-lg-0 scroll">
                          <li className="nav-item-title">
                            {t("navmenu.industries")}
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">Graph</div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link
                    to="./"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("navmenu.resources")}
                  </Link>
                  <div className="mega_menu_inner">
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <ul className="dropdown-menu custom-nav-menu mx-lg-0 scroll">
                          <li className="nav-item-title">
                            {t("navmenu.resources")}
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.blogs.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.documents.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.events.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                          <li className="custom-nav-item">
                            <NavLink
                              to="/Home-chat"
                              exact
                              className="line-block-3"
                            >
                              <div className="text-block-13">
                                {t("resources.webinars.title")}
                              </div>
                              <div className="text-block-14">
                                Uncover sophisticated fraud rings by visualizing
                                customer networks
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/Startup">
                    {t("navmenu.partners")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/About">
                    {t("navmenu.company")}
                  </NavLink>
                </li>
              </ul>
              <a
                className={`btn_get btn_request bg-transparent  ${hbtnClass}`}
                href="#get-app"
              >
                {t("navmenu.request_demo")}
              </a>
            </div>
            <div className="language-selector__container">
                <select className="js_language_selector" onChange={changeLang} value={lang}>
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
            </div>
          </div>
        </nav>
      </header>
    // </Sticky>
  );
};

export default CustomNavbar;
