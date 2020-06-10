import React from 'react';
import Character from '../Character/Character';
import { connect } from 'react-redux';
import { getRandomCharacter } from '../../actions';
import { Button } from 'reactstrap';
import './RandomCharacter.scss';

function RandomCharacter (props) {

    if (props.randomCharacter.isFirstLoad) {
        props.getRandomCharacter();
    }
    
    return (
        <>
            <div className="row">
                <div className="col">
                    <Button color="primary" className="button-random" onClick={props.getRandomCharacter}>Show Random</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        props.randomCharacter.isLoading
                        ? <h4>Loading...</h4>
                        : <Character character={props.randomCharacter.character} />
                    }
                </div>
            </div>
        </>
    );
}

const mapState = (state) => ({
    randomCharacter: state.randomCharacter
});

export default connect(mapState, {getRandomCharacter})(RandomCharacter);