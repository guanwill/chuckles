import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {Router, Actions} from 'react-native-router-flux';
import styles from './styles/styles';

class Home extends Component {

  goToJokes() {
    Actions.Jokes()
  }

  render() {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.goToJokes.bind(this)}>
              <Text style={styles.buttonText}> JOKES </Text>
            </TouchableOpacity>
        </View>

    );
  }

}


export default Home;
