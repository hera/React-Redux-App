import React from 'react';
import './Character.scss';

function Character (props) {
    const char = props.character;
    return (
        <div className="row Character">
            <div className="col">
                <img className="Character__image" src={char.img} alt={char.name} />
            </div>
            
            <div className="col">
                <h1>{char.name}</h1>

                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>Nickname:</td>
                            <td>{char.nickname || 'Unknown'}</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{char.status || 'Unknown'}</td>
                        </tr>
                        <tr>
                            <td>Birthday:</td>
                            <td>{char.birthday || 'Unknown'}</td>
                        </tr>
                        <tr>
                            <td>Occupation:</td>
                            <td>
                                <ul className="Character__occupation">
                                    {
                                        props.character.occupation.map((item, key) => {
                                            return (
                                                <li key={key}>{item}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Portrayed by:</td>
                            <td>{char.portrayed || 'Unknown'}</td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>{char.category || 'Unknown'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Character;