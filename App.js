import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
} from 'react-native';
import { styles } from './StyleSheet';

const App = () => {
  const [finish, setFinish] = useState(false);
  const [digits, setDigits] = useState([]);
  const [numbersForDisplay, setNumbersForDisplay] = useState([]);
  const [actions, setActions] = useState([]);
  const [number, setNumber] = useState('');
  const [answer, setAnswer] = useState(0);

  const clearAll = () => {
    setNumber('');
    setAnswer('');
    setFinish(false);
    setNumbersForDisplay([]);
    setActions([]);
    setDigits([]);
  }

  const onPressNumber = (e) => {
    if (number.length == 0 && e == '.') {
      setNumber(('0' + e))
      setNumbersForDisplay([...numbersForDisplay, '0'+e])
    }
    else if (number.includes('.') && e == '.') {
      setNumber(number)
      setNumbersForDisplay([...numbersForDisplay, number])
    }
    else {
      setNumber(number + e)
      setNumbersForDisplay([...numbersForDisplay, number])
    }
  }

  const onPressPlusMinus = () => {
    let numbers = 0
    numbers = (+number) * -1
    setNumber(numbers)
    for(let i = 0; i< number.length; i++){
      if(+(numbers[i]*-1) !== +(numbers[i]))
      setNumbersForDisplay([...numbersForDisplay, numbers])
    }
  }

  const onPressAction = (e) => {
    setDigits([...digits, number])
    setNumbersForDisplay([...numbersForDisplay, e])
    setActions([...actions, e])
    setNumber('')
  }

  const onClickPercent = () => {
    alert('Данный функционал пока не работает')
  }

  const getSumm = () => {
    let lastNumber = [...digits, number]
    let summ = '';
    for (let i = 0; i < lastNumber.length; i++) {
      if (lastNumber[i] && actions[i]) {
        summ = summ + lastNumber[i] + actions[i]
      }
      else {
        summ = summ + lastNumber[i]
      }
    }
    setFinish(true);
    setDigits([eval(summ)]);
    setActions([]);
    setNumber('');
    setAnswer(eval(summ));
    lastNumber = [];
    summ = '';
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View >
        <Text style={styles.displayText}>
          {numbersForDisplay}
        </Text>
      </View>
      <View >
        <Text style={styles.displayAnswer}>
          {finish ? answer : number}
        </Text>
      </View>
      <View style={styles.firstRow}>
        <Pressable style={styles.buttonGrey} onPress={clearAll}>
          <Text style={styles.text}>ac</Text>
        </Pressable>
        <Pressable style={styles.buttonGrey} onPress={onPressPlusMinus}>
          <Text style={styles.text}>+/-</Text>
        </Pressable>
        <Pressable style={styles.buttonGrey} onPress={onClickPercent}>
          <Text style={styles.text}>%</Text>
        </Pressable>
        <Pressable style={styles.buttonOrange} onPress={() => { onPressAction('/') }}>
          <Text style={styles.text}>/</Text>
        </Pressable>
      </View>
      <View style={styles.firstRow}>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('7') }}>
          <Text style={styles.text}>7</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('8') }}>
          <Text style={styles.text}>8</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('9') }}>
          <Text style={styles.text}>9</Text>
        </Pressable>
        <Pressable style={styles.buttonOrange} onPress={() => { onPressAction('*') }}>
          <Text style={styles.text}>X</Text>
        </Pressable>
      </View>
      <View style={styles.firstRow}>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('4') }}>
          <Text style={styles.text}>4</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('5') }}>
          <Text style={styles.text}>5</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('6') }}>
          <Text style={styles.text}>6</Text>
        </Pressable>
        <Pressable style={styles.buttonOrange} onPress={() => { onPressAction('-') }}>
          <Text style={styles.text}>-</Text>
        </Pressable>
      </View>
      <View style={styles.firstRow}>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('1') }}>
          <Text style={styles.text}>1</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('2') }}>
          <Text style={styles.text}>2</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('3') }}>
          <Text style={styles.text}>3</Text>
        </Pressable>
        <Pressable style={styles.buttonOrange} onPress={() => { onPressAction('+') }}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
      <View style={styles.firstRow}>
        <Pressable style={styles.buttonZero} onPress={() => { onPressNumber('0') }}>
          <Text style={styles.text}>0</Text>
        </Pressable>
        <Pressable style={styles.buttonBlack} onPress={() => { onPressNumber('.') }}>
          <Text style={styles.text}>.</Text>
        </Pressable>
        <Pressable style={styles.buttonOrange} onPress={getSumm}>
          <Text style={styles.text}>=</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;
