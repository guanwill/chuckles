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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getChuckJokes() {
    this.setState({
      isLoaded: false,
    })
    fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.value)
      this.setState({
        joke: this.capitalizeFirstLetter(responseData.value),
        isLoaded: true,
      })
    })
    .done();
  }

  getMamaJokes() {
    this.setState({
      isLoaded: false,
    })
    fetch("http://api.yomomma.info/", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.joke)
      this.setState({
        joke: this.capitalizeFirstLetter(responseData.joke),
        isLoaded: true,
      })
    })
    .done();
  }

  getDadJokes() {
    this.setState({
      isLoaded: false,
    })
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData)
      this.setState({
        joke: responseData.joke,
        isLoaded: true
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
      buttonText: {
        fontSize: 18,
        padding: 8,
        textAlign: 'center',
        color: "#fff",
        fontWeight: "bold"
      },
      picker: {
        backgroundColor: 'beige',
      },
      JokeContainer: {
        backgroundColor: 'beige',
        height: '200%',
        width: '100%',
        alignItems: 'center'
      },
      JokeResult: {
        padding: 40,
        paddingTop: 20,
      },
      buttonWrapperJokeChuck: {
        // backgroundColor:'#1f3861',
        backgroundColor: 'darkorange',
        padding: 2,
        marginBottom: 11,
        width: 160,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'darkorange',
        opacity: 0.8
      },
      buttonWrapperJokeMama: {
        // backgroundColor:'#1f3861',
        backgroundColor: 'darkorange',
        padding: 2,
        marginBottom: 11,
        width: 160,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'darkorange',
        opacity: 0.8
      },
      JokeResultText: {
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: 'bold',
        // color: '#ad4b40'
        color: 'grey'
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
            <Picker.Item label="Dad Jokes" value="dad" />
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


            {this.state.type == "dad" &&
            <TouchableOpacity style={styles.buttonWrapperJokeMama} onPress={this.getDadJokes.bind(this)}>
              <Text style={styles.buttonText}> DAD ME </Text>
            </TouchableOpacity>
            }


            {!this.state.isLoaded ?
              <View style={styles.JokeResult}>
                <Text style={styles.JokeResultText}>Loading ... </Text>
              </View> :
              <View style={styles.JokeResult}>
                <Text style={styles.JokeResultText}>{this.state.joke} </Text>
              </View>
            }

        </View>


      </View>

    );
  }


}


export default Jokes;
