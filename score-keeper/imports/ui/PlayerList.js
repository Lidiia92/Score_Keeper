import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Player from './Player';
import PropTypes from 'prop-types';

class PlayerList extends Component {
    
  renderPlayers () {
    if(this.props.players.length > 0) {
        return this.props.players.map(player => {
            return <Player key={player._id} player={player}/>;
        });
    } else {
        return <div className="item"><p className="item__message">Add your first player to get started.</p></div>
    }
  }
  
  render() {
        return (
            <div>
                <FlipMove>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.array.isRequired,
}


export default PlayerList;