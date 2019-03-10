import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [
  {
    _id: '1',
    name: "Bun",
    score: 99
  },

  {
    _id: '2',
    name: "Kitty",
    score: 50
  },

  {
    _id: '3',
    name: "Me",
    score: 63
  },
]

const renderPlayers  = function (playersList) {
  return playersList.map(player => {
    return <p key={player._id}>{player.name} has {player.score} points.</p>
  });
}

Meteor.startup(function () {
  const title = "Test Title";
  const jsx = (
              <div>
                <h3>{title}</h3>
                <p>This is from main.js</p>
                <p>Second p</p>
                {renderPlayers(players)}
              </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
