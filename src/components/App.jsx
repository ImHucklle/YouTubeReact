import React, { Component } from 'react';
import { googleAPIKey } from '../keys';
import './App.css';
import {googleAPIKeys} from './keys';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <body>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/watch?v=XqpQpt_cmhE?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
                </body>
        )
    }
}

export default App;