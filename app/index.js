import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router, Scene, Actions} from 'react-native-router-flux';
import Jokes from './Jokes';
import Home from './Home';
import Facts from './Facts';

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
          <Scene
            component={Facts}
            key='Facts'
            title='Facts'
          />

        </Scene>
      </Router>
    )
  }
}


export default App;
