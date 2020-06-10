import React from 'react';
import logo from './logo.png';

function HomePage (props) {
    return (
        <>
            <img src={logo} alt="Breaking Bad" />
            <h2>About</h2>
            <p>
                Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse.
                His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth,
                and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer.
                Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as
                much money as he can in the time he has left by turning an old RV into a meth lab on wheels.
            </p>
        </>
    );
}

export default HomePage;