import React from 'react';
import {Players} from '../api/players';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Player extends React.Component {


  render() {

	const player = this.props.player;
	let itemClassName = `item item--position-${player.rank}`;
	let buttonRanked = `button--position-${player.rank}` 
	let buttonsClasses = `button button--round`;

	if(player.rank === 1 || player.rank === 2 || player.rank === 3) {
		buttonsClasses = `button button--round ${buttonRanked}`
	} else {
		buttonsClasses = `button button--round`
	}
	
	
    return (
      <div key={player._id} className={itemClassName}>
        <div className="player">
			<div>
				<h3 className="player__name">{player.name}</h3>
				<p className="player__stats">{player.score} point(s).</p>
				<h3>{player.rank === 1 || player.rank === 2 || player.rank === 3 ? <FontAwesomeIcon icon="medal" /> : ''} {player.position} place.</h3>
			</div>
			<div className="player__actions">
				<button className={buttonsClasses} onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
				<button className={buttonsClasses} onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
				<button className={buttonsClasses} onClick={() => Players.remove({_id: player._id})}>X</button>
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