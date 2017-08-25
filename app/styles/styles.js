import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

var screen_width = Dimensions.get('window').width;

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    backgroundColor: '#fff',
    // marginTop: 80,
    // marginLeft: 50,
    // marginRight: 50,
    // marginBottom: 80,
    // opacity: 0.9
  },

  buttonWrapper: {
    backgroundColor:'orange',
    // borderRadius: 10,
    // borderWidth: 3,
    // borderColor: 'orange',
    margin: 10,
    width: 200
  },

  buttonText: {
    fontSize: 18,
    padding: 8,
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold"
  },
  //
  // JokeContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center', //horizontal
  //   justifyContent: 'center', //vertical
  //   backgroundColor: 'green',
  // },
  //

  sContainer: {
    backgroundColor: 'red',
    flex: 1,
    //  alignItems: 'center', //horizontal
     justifyContent: 'center', //vertical
  }

});
