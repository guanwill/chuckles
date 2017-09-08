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

class Facts extends Component {

  constructor(){
    super();
    this.state = {
      isLoaded: true,
      type: "",
      fact: "",
    }
  }

  componentDidMount() {
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getTodaysFact() {
    this.setState({
      isLoaded: false
    })
    var TodayDate = new Date();
    var month = TodayDate.getMonth() + 1
    var date =  TodayDate.getDate()
    fetch("http://numbersapi.com/" + month + "/" + date + "/date", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        fact: responseData.text,
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
        backgroundColor: 'purple',
      },
      buttonText: {
        fontSize: 18,
        padding: 8,
        textAlign: 'center',
        color: "#fff",
        fontWeight: "bold"
      },
      picker: {
        backgroundColor: 'rgba(175, 173, 255, 0.38)',
      },
      FactContainer: {
        backgroundColor: 'rgba(175, 173, 255, 0.38)',
        height: '200%',
        width: '100%',
        alignItems: 'center',
      },
      FactResult: {
        padding: 40,
        paddingTop: 20,
      },
      buttonWrapperFactChuck: {
        backgroundColor: 'darkblue',
        padding: 2,
        marginBottom: 11,
        width: 160,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'darkblue',
        opacity: 0.8
      },
      FactResultText: {
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey'
      }

    });

    return (

      <View>
        <View style={styles.Container}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.type}
            onValueChange={(value) => this.setState({type: value})}>
            <Picker.Item label="Select Fact" value="select" />
            <Picker.Item label="Facts About Today" value="today" />
          </Picker>
        </View>

        <View style={styles.FactContainer}>
            {this.state.type == "today" &&
            <TouchableOpacity style={styles.buttonWrapperFactChuck} onPress={this.getTodaysFact.bind(this)}>
              <Text style={styles.buttonText}> FACT ME </Text>
            </TouchableOpacity>
            }

            {!this.state.isLoaded ?
              <View style={styles.FactResult}>
                <Text style={styles.FactResultText}>Loading ... </Text>
              </View> :
              <View style={styles.FactResult}>
                <Text style={styles.FactResultText}>{this.state.fact} </Text>
              </View>
            }

        </View>


      </View>

    );
  }


}


export default Facts;
