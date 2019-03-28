import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal} from '@fortawesome/free-solid-svg-icons'

library.add(faMedal)

class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Made By Bun"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}


export default App;