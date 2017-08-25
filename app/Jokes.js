import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Picker
} from 'react-native';

import {Router, Actions} from 'react-native-router-flux';
// import styles from './styles/styles';

class Jokes extends Component {

  constructor(){
    super();
    this.state = {
      joke: "",
      isLoaded: true,
      type: ""
    }
  }

  componentDidMount() {
  }

  getChuckJokes() {
    fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.value)
      this.setState({
        joke: responseData.value,
      })
    })
    .done();
  }

  getMamaJokes() {
    fetch("http://api.yomomma.info/", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.joke)
      this.setState({
        joke: responseData.joke,
      })
    })
    .done();
  }



  render() {

    var styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center', //horizontal
        justifyContent: 'center', //vertical
        backgroundColor: '#fff',
      },
      buttonWrapper: {
        backgroundColor:'orange',
        margin: 10,
        width: 200,
      },
      buttonText: {
        fontSize: 18,
        padding: 8,
        textAlign: 'center',
        color: "#fff",
        fontWeight: "bold"
      },
      picker: {
        backgroundColor: '#fff'
      },
      JokeContainer: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        alignItems: 'center'
      },
      JokeResult: {
        padding: 40,
        paddingTop: 20,
      },
      buttonWrapperJokeChuck: {
        backgroundColor:'grey',
        margin: 10,
        width: 200,
      },
      buttonWrapperJokeMama: {
        backgroundColor:'grey',
        margin: 10,
        width: 200,
      }

    });

    return (

      <View>
        <View  style={styles.Container}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.type}
            onValueChange={(value) => this.setState({type: value})}>
            <Picker.Item label="Select Joke" value="select" />
            <Picker.Item label="Chuck Norris" value="chuck" />
            <Picker.Item label="Your Mama" value="mama" />
          </Picker>
        </View>

        <View style={styles.JokeContainer}>
            {this.state.type == "chuck" &&
            <TouchableOpacity style={styles.buttonWrapperJokeChuck} onPress={this.getChuckJokes.bind(this)}>
              <Text style={styles.buttonText}> CHUCK ME </Text>
            </TouchableOpacity>
            }
            {this.state.type == "mama" &&
            <TouchableOpacity style={styles.buttonWrapperJokeMama} onPress={this.getMamaJokes.bind(this)}>
              <Text style={styles.buttonText}> MAMA ME-A </Text>
            </TouchableOpacity>
            }

            <View style={styles.JokeResult}>
              <Text>{this.state.joke} </Text>
            </View>
        </View>


      </View>

    );
  }


}


export default Jokes;
