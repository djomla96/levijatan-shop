import '../css/header.css'

import React, { Component } from 'react'
import logo from "../images/logo.png";
// import history from "../utils/history";

export default class Header extends Component {
  componentDidMount() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav-mobile-list');
    burger.addEventListener("click", () => {
      burger.classList.toggle("change");
      mobileNav.classList.toggle("show-mobile-nav");
    })

    window.onscroll = function() {myFunction()};

    var header = document.querySelector(".box-shadow");
    let bodyWrapper = document.querySelector(".body-wrapper");

    function myFunction() {
      if (window.pageYOffset > 300) {
        bodyWrapper.classList.add("padding-body")
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
        bodyWrapper.classList.remove("padding-body")
      }
    }
  }

  render() {
    return (
      <div className="wrapper-nav">
        <div className="box-shadow">
        <nav className="wrapper">
          <div className="desktop-nav">
            <div className="nav-left">
              <ul>
                <li><a href="/">Početna</a></li>
                <li><a href="/about">O nama</a></li>
                <li><a href="/video-archive">Video Arhiva</a></li>
              </ul>
            </div>
            <div className="nav-logo">
              <img alt="logo" src={logo}></img>
            </div>
            <div className="nav-right">
              <ul>
                <li><a href="/membership">Članska Karta</a></li>
                <li><a href="/shop">Prodavnica</a></li>
                <li><a href="/adopt">Udomi</a></li>
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
                <li><a href="/">Početna</a></li>
                <li><a href="/about">O nama</a></li>
                <li><a href="/video-archive">Video Arhiva</a></li>
                <li><a href="/membership">Članska Karta</a></li>
                <li><a href="/shop">Prodavnica</a></li>
                <li><a href="/adopt">Udomi</a></li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
    )
  }
}


