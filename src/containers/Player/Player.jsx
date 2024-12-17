import React from 'react';

const score = 75;


const Player = () => {
    const result = score > 50 ? 'Vainqueur' : 'Perdant';
    return (
        <div>
            <h1>{result}</h1>
            <p>Score: {score}</p>
        </div>
    );
};

export default Player;