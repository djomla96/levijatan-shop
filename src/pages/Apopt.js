import React from 'react';
import '../css/adopt.css'
import dogs from '../json/dogs.json';
import CollapseCard from "../components/CollapseCard";
const Adopt = () => {
    return (
        <div className="adopt">
            <div className="wrapper">
                <h1>Udomi stićenika</h1>
                <div className="dogs">
                    {dogs.map(dog => {
                        return <CollapseCard key={dog.id} title="Detaljnije" dog={dog}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Adopt;
