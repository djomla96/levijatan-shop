import '../css/header.css'

import React, { Component } from 'react'
import logo from "../images/logo.jpg";
// import history from "../utils/history";

export default class Header extends Component {
  componentDidMount() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav-mobile-list');
    burger.addEventListener("click", () => {
      burger.classList.toggle("change");
      mobileNav.classList.toggle("show-mobile-nav");
    })
  }

  render() {
    return (
      <div className="wrapper-nav">
        <nav className="wrapper">
          <div className="desktop-nav">
            <div className="nav-left">
              <ul>
                <li><a href="/">Pocetna</a></li>
                <li><a href="/">O nama</a></li>
                <li><a href="/">Video Arhiva</a></li>
              </ul>
            </div>
            <div className="nav-logo">
              <img alt="logo" src={logo}></img>
            </div>
            <div className="nav-right">
              <ul>
                <li><a href="/">Clanska Karta</a></li>
                <li><a href="/">Prodavnica</a></li>
                <li><a href="/">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="mobile-nav">
            <div className="nav-logo-mobile">
              <img alt="logo" src={logo}></img>
            </div>
            <div className="burger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="nav-mobile-list">
              <ul>
                <li><a href="/">Pocetna</a></li>
                <li><a href="/">O nama</a></li>
                <li><a href="/">Video Arhiva</a></li>
                <li><a href="/">Clanska Karta</a></li>
                <li><a href="/">Prodavnica</a></li>
                <li><a href="/">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


