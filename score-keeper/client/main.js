import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';



const renderPlayers  = function (playersList) {
  return playersList.map(player => {
    return <p key={player._id}>{player.name} has {player.score} points.</p>
  });
}

Meteor.startup(function () {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = "Score Keeper";
    const jsx = (
                <div>
                  <h2>{title}</h2>
                  {renderPlayers(players)}
                </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
