import React from 'react';
import {Players} from '../api/players';
import PropTypes from 'prop-types';

class Player extends React.Component {

  render() {
    const player = this.props.player;
    console.log(player);
    return (
      <div key={player._id} className="item">
        <div className="player">
			<div>
				<h3 className="player__name">{player.name}</h3>
				<p className="player__stats">{player.score} point(s).</p>
			</div>
			<div className="player__actions">
				<button className="button button--round" onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
				<button className="button button--round" onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
				<button className="button button--round" onClick={() => Players.remove({_id: player._id})}>X</button>
			</div>
        </div>
      </div>
    );  
  }

}

Player.propTypes = {
    player: PropTypes.object.isRequired,
}



export default Player;