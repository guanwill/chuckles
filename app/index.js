import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router, Scene, Actions} from 'react-native-router-flux';
import Jokes from './Jokes';
import Home from './Home';

class App extends Component {

  render() {
    return(
      <Router>
        <Scene key='root'>

          <Scene
            component={Home}
            initial={true}
            key='Home'
            title='Home'
          />
          <Scene
            component={Jokes}
            key='Jokes'
            title='Jokes'
          />

        </Scene>
      </Router>
    )
  }
}


export default App;
