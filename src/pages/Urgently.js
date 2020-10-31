import React, { Component } from 'react';
import '../css/urgently.css';

export default class Urgently extends Component {
    render() {
        return (
            <div className="urgently">
                <div className="wrapper">
                    <h1 className="title">HITNA PRIJAVA</h1>
                    <div className="twoInputs">
                        <div className="input-span">
                            <input placeholder="Ime i prezime" type="text" className="inp"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="input-span">
                            <input placeholder="Kontakt telefon" type="text" className="inp field" ></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                    <div className="twoInputs">
                        <div className="input-span">
                            <input placeholder="Adresa gde se nalaze zivotinje (Tacna lokacija)" type="text" className="inp"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="input-span">
                            <input placeholder="Vrsta zivotinje" type="text" className="inp field"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                    <div className="twoInputs">
                    <div className="input-span">
                            <input placeholder="Opis zivotinje (Fizicke karakteristike)" type="text" className="inp"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="input-span">
                            <input placeholder="Opis povrede i nacin nastanka povrede" type="text" className="inp field"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                    <div className="twoInputs">
                        <div className="input-span">
                            <input placeholder="Slika/snimak (upload)" type="text" className="inp"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="input-span">
                            <input placeholder="Stepen urgentnosti od 1-10 (1 napustena zivotinja, 10 zivotno ugrozena zivotinja)" type="number" className="inp field"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                    <div className="twoInputs">
                        <div className="input-span">
                            <input placeholder="Na koji nacin vi mozete da pomognete u vezi sa tom zivotinjom? (prevoz, smestaj, finansiranje, hrana, itd.)" type="text" className="inp"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="input-span">
                            <input placeholder="Grad" type="text" className="inp field"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                    <div className="twoInputs last">
                        <div className="input-span">
                            <input placeholder="Datum podnosenja prijave" type="date" className="inp"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="input-span">
                            <input placeholder="Vasa napomena" type="text" className="inp field"></input>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                    <button className="sendButton">Posalji prijavu</button>
                </div>
            </div>
        )
    }
}
