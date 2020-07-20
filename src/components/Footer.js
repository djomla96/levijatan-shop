import React from 'react';
import '../css/footer.css'
import logo from "../images/logo.png";
import logoNoText from "../images/logo-without-text.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="wrapper">
                    <div className="footer-logo">
                        <img alt="logo" src={logoNoText}></img>
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/pasazot/"> <i className="fa fa-facebook nf"></i></a>
                        <a href="https://www.instagram.com/pasazot/?hl=sr"> <i className="fa fa-instagram ni"></i></a>
                        <a href="https://twitter.com/pasazot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter nt"></i></a>
                    </div>
                    <div className="footer-tittle">
                        <h1>POSETITE NAS NA DRUŠTVENIM MREŽAMA</h1>
                    </div>
                    <div className="footer-text">
                        <div className="footer-title">Priča o grofu</div>
                        <p>Grof je bio pit bull pronađen krajem oktobra 2016. Ležao je sam i napušten na betonu blizu aerodroma, a njegovo lice prepuno dubokih ožiljaka jasno je otkrivalo da je bio zlostavljan, mučen i teran da se bori u ringu. Uprkos teškoj prošlosti i velikim bolovima koje je danima trpeo, Grof je još uvek imao veliko srce. I posle svega kroz šta je prošao skupio je hrabrost da nam pruži poverenje. Pored ljubavi prema ljudima koju je i dalje imao u svom srcu imao ju je i prema svom drugaru Titu, mešancu koga smo istog dana spasili iz romskog naselja.</p>
                        <p>Borba za njegov život trajala je punih mesec dana. Ipak bolesti bubrega i srca bile su jače čak i od naše želje i velikog truda da Grof dobije drugu priliku za život pun ljubavi i poštovanja kakav je zasluživao. Brinuli o njemu 24 sata na dan najbolje što smo znali, ali ipak naš Grof preminuo je 25.11.2016.</p>
                        <p>Veličinu Grofovog srca i života osećamo svakodnevno i verujemo da smo promenili Njegov svet tih poslednjih mesec dana, kao što je On nepovratno promenio naš i povezao sve nas zauvek.</p>
                        <p>Grofino naša, živiš u nama i kroz nas! <br />Hvala Ti!</p>
                        <p>Tvoj Levijatan Team</p>
                        <p className="footer-text-desc"><span>«</span>Kroz Grofa video sam sve pse koje smo spasili i sve pse koje ćemo tek spasiti.<span>»</span></p>
                        <p className="footer-text-desc">Pavle Bihaly</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="wrapper">
                    <div className="footer-wrapper">
                        <div className="footer-bottom-box-img">
                            <ul>
                                <li><img alt="logo" src={logo}></img></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Brzi linkovi</li>
                                <li><a href="/about">O nama</a></li>
                                <li><a href="/video-archive">Video Arhiva</a></li>
                                <li><a href="/membership">Članska Karta</a></li>
                                <li><a href="/shop">Prodavnica</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Prodavnica</li>
                                <li><a href="/delivery">Način isporuke</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Budi human</li>
                                <li><a href="/">Želite udomiti stićenika</a></li>
                                <li><a href="/membership">Postani član</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Kontakt</li>
                                <li><a href="/contact">Pošalji email</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright"><p>© 2020 Levijatan. All Right Reserved</p></div>
                </div>
            </div>
            
        </footer>
  
    );
}

export default Footer;
