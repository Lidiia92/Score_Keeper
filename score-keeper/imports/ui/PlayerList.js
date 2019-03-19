import React, { Component } from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

class PlayerList extends Component {
    
  renderPlayers () {
    if(this.props.players.length > 0) {
        return this.props.players.map(player => {
            return <Player key={player._id} player={player}/>;
        });
    } else {
        return <p>Add your first player to get started.</p>
    }
  }
  
  render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.array.isRequired,
}


export default PlayerList;