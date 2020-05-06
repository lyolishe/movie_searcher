import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";

const About =() => {

    return(
        <div>
            <div className='row'>
                <Header text={"Gad's Film Searcher"}/>
                <div className='card border-success'>
                    <div className='card-body'>
                        here it is some info about Gad's Film Searcher
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About
