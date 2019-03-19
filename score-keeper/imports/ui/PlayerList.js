import React, { Component } from 'react';
import Player from './Player';

class PlayerList extends Component {
    
  renderPlayers () {
    return this.props.players.map(player => {
        return <Player key={player._id} player={player}/>;
    });
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