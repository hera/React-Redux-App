import React from 'react';
import './App.scss';
import { Route, Router } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import Search from '../Search/Search';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Nav />
                <Route exact path="/" component={HomePage} />
                <Route path="/random" component={RandomCharacter} />
                <Route path="/search" component={Search} />
            </div>
        </div>
    );
}

export default App;
