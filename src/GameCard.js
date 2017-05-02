import React from 'react';
import { PropTypes } from 'prop-types';

export default function GameCard({ game }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={game.cover} alt="Game Cover"/>
      </div>
      <div className="content">
        <div className="header">{game.title}</div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
 game: PropTypes.object.isRequired
}
