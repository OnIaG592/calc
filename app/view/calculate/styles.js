import { Dimensions, StyleSheet } from "react-native";


const windowWidth = Dimensions.get('window').width
const buttonWidth = windowWidth / 5
const zeroWidth = windowWidth / 2 - 10

export const styles = StyleSheet.create({
  firstRow: {
    flex:0.7,
    marginHorizontal: 5,
    borderColor: 'black',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  secondRow: {
    orderColor: 'black',
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  text: {
    color: '#FFF',
    padding: 10,
    fontSize: 40,
    textAlign: 'center',
  },
  minDisplayAnswer: {
    fontSize: 60,
    color: '#FFF',
    display: 'flex',
    textAlign: 'right'
  },
  displayText: {
    fontSize: 20,
    color: '#FFF',
    display: 'flex',
    textAlign: 'right'
  },
  buttonGrey: {
    justifyContent: 'center',
    height: buttonWidth,
    width: buttonWidth,
    backgroundColor: 'grey',
    borderRadius: buttonWidth / 2,
    textAlign: 'center'
  },
  buttonBlack: {
    justifyContent: 'center',
    height: buttonWidth,
    width: buttonWidth,
    backgroundColor: '#423e3e',
    borderRadius: buttonWidth / 2,
    textAlign: 'center'
  },
  buttonOrange: {
    marginVertical: 5,
    justifyContent: 'center',
    height: buttonWidth,
    width: buttonWidth,
    backgroundColor: 'orange',
    borderRadius: buttonWidth / 2,
    textAlign: 'center'
  },
  buttonZero: {
    justifyContent: 'center',
    height: buttonWidth,
    width: zeroWidth,
    backgroundColor: '#423e3e',
    borderRadius: zeroWidth / 2,
    textAlign: 'center'
  },
  displayAnswer: {
    fontSize: 130,
    color: '#FFF',
    display: 'flex',
    textAlign: 'right'
  }
});