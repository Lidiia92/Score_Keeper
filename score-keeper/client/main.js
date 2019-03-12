import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';



const renderPlayers  = playersList => {
  return playersList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
        <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
        <button onClick={() => Players.remove({_id: player._id})}>X</button>
      </p>
    );
  });
}

const handleSubmit = (e) => {
  const newPlayer = e.target.playerName.value;
  e.preventDefault();

  if(newPlayer) {
    e.target.playerName.value = '';
    Players.insert({
      name: newPlayer,
      score: 0
    });
  }
};

Meteor.startup( () => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = "Score Keeper";
    const jsx = (
                <div>
                  <h2>{title}</h2>
                  {renderPlayers(players)}
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Enter player name..."/>
                    <button>Add Player</button>
                  </form>
                </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});

