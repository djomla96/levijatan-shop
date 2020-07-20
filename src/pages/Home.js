import React, { Component} from 'react';
import bannerImg from "../images/slikapsa.png";
import bannerText from "../images/ukljuciseipodrzinas.png";
import '../css/home.css'
export default class Home extends Component {

    render() {
        
        return (
            <div>
                <div className="banner-wrapper">
                    <div className="banner-text-wrapper">
                        <img alt="bannerText" className="banner-text" src={bannerText}></img>
                    </div>
                    <img alt="bannerImg" src={bannerImg}></img>
                </div>
            </div>
        )
    }
}

