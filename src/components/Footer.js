import React from 'react';
import '../css/footer.css'
import logo from "../images/logo.jpg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="wrapper">
                    <div className="footer-logo">
                        <img src={logo}></img>
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/pasazot/"> <i className="fa fa-facebook nf"></i></a>
                        <a href="https://www.instagram.com/pasazot/?hl=sr"> <i className="fa fa-instagram ni"></i></a>
                        <a href="https://twitter.com/pasazot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter nt"></i></a>
                    </div>
                    <div className="footer-tittle">
                        <h1>POSETITE NAS NA DRUSTVENIM MREZAMA</h1>
                    </div>
                    <div className="footer-text">
                        <div className="footer-title">LEVIJATAN</div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="wrapper">
                    <div className="footer-wrapper">
                        <div className="footer-bottom-box-img">
                            <ul>
                                <li><img src={logo}></img></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Nesto</li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Nesto</li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Nesto</li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Nesto</li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Nesto</li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                                <li><a>Nesto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
  
    );
}

export default Footer;
