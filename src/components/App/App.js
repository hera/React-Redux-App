import React from 'react';
import './App.scss';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Nav />
            </div>
        </div>
    );
}

export default App;
