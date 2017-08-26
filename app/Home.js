import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

import {Router, Actions} from 'react-native-router-flux';
// import styles from './styles/styles';

class Home extends Component {

  goToJokes() {
    Actions.Jokes()
  }

  render() {
    var styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center', //horizontal
        justifyContent: 'center', //vertical
        // backgroundColor: '#fff',
        width: null,
        height: null
      },
      buttonWrapper: {
        backgroundColor:'darkorange',
        padding: 10,
        width: 160,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'darkorange',
        opacity: 0.8
      },
      buttonText: {
        fontSize: 20,
        padding: 8,
        textAlign: 'center',
        color: "white",
        fontWeight: "bold",
        opacity: 1
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: null,
        alignItems: 'center', //horizontal
        justifyContent: 'center', //vertical
      }
    });

    return (
      <Image source={ require('./images/bg.jpg') } style={styles.container}>
        <View >
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.goToJokes.bind(this)}>
              <Text style={styles.buttonText}> JOKES </Text>
            </TouchableOpacity>
        </View>
      </Image>
    );
  }

}


export default Home;
