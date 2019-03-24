import React from 'react';
import {Players} from './../api/players';


class AddPlayer extends React.Component{

    handleSubmit(e) {
        const newPlayer = e.target.playerName.value;
        e.preventDefault();
      
        if(newPlayer) {
          e.target.playerName.value = '';
          Players.insert({
            name: newPlayer,
            score: 0
          });
        }
    }

    render() {
      return (
        <div className="item">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="playerName" placeholder="Enter player name..."/>
                <button>Add Player</button>
            </form>
        </div>
      );
    }
  }

export default AddPlayer;