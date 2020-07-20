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
                        <img className="banner-text" src={bannerText}></img>
                    </div>
                    <img src={bannerImg}></img>
                </div>
            </div>
        )
    }
}

