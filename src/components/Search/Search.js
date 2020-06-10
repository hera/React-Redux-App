import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { searchCharacters, setSearchQuery } from '../../actions';
import Character from '../Character/Character';

function Search (props) {

    const chars = props.search.characters;

    function handleFormSubmit (event) {
        event.preventDefault();
        props.searchCharacters(props.search.query);
    }

    function handleQueryChange (event) {
        event.preventDefault();
        props.setSearchQuery(event.target.value);
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <h2>Search</h2>
                    <Form onSubmit={(event) => handleFormSubmit(event)}>
                        <FormGroup>
                            <Label for="search">Email</Label>
                            <Input type="search" onChange={(event) => handleQueryChange(event)} name="q" id="search" placeholder="For example: White" />
                        </FormGroup>
                        <Button color="primary">Search</Button>
                    </Form>
                </div>
            </div>
            {
                chars && chars.map((character, key) => {
                    return <Character key={key} character={character} />
                })
            }
        </>
    );
}

const mapState = (state) => ({
    search: state.search
});

export default connect(mapState, {searchCharacters, setSearchQuery})(Search);