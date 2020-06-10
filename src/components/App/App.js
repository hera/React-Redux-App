import React from 'react';
import './App.scss';
import { Route, Router } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import RandomCharacter from '../RandomCharacter/RandomCharacter';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Nav />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/random" component={RandomCharacter} />
            </div>
        </div>
    );
}

export default App;
