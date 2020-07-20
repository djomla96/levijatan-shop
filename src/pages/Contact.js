import React, { Component } from 'react'
import '../css/contact.css'
import $ from 'jquery';
export default class Contact extends Component {
    componentDidMount() {
        $( ".input" ).focusin(function() {
            $( this ).find( "span" ).animate({"opacity":"0"}, 200);
        });
          
        $( ".input" ).focusout(function() {
            $( this ).find( "span" ).animate({"opacity":"1"}, 300);
        });
    }
    render() {
        return (
            <div className="contact">
                <div className="wrapper">
                <h1>Contact</h1>
                <form>
                    <div className="wrapper-form-top">
                    <div className="input name">
                        <input type="text" placeholder="Ime i prezime" />
                    <span><i className="fa fa-user"></i></span>
                    </div>
                    <div className="input email">
                        <input type="email" placeholder="Email" />
                    <span><i className="fa fa-envelope-o"></i></span>
                    </div>
                    </div>
                    <textarea placeholder="Poruka"></textarea>
                    <div className="button-wrapper">
                        <button type="submit">Posalji poruku</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
