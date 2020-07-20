import React, { Component} from 'react';
import bannerImg from "../images/slikapsa.png";
import bannerText from "../images/ukljuciseipodrzinas.png";
import '../css/home.css'
import { Transition } from 'react-spring/renderprops'
export default class Home extends Component {

    render() {
        
        return (
            <div>
                <div className="banner-wrapper">
                    <Transition
                        items={<div className="banner-text-wrapper"><img alt="bannerText" className="banner-text" src={bannerText}></img></div>} keys={item => item}
                        from={{ opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
                        enter={{ opacity: 1, visibility: 'visible' }}
                        leave={{ opacity: 1, visibility: 'visible' }}>
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>
                    <Transition
                        items={<img alt="bannerImg" src={bannerImg}></img>} keys={item => item}
                        from={{ transform: 'translateX(60%)', opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
                        enter={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}
                        leave={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}>
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>
                    
                </div>
            </div>
        )
    }
}

