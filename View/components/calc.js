import { useDispatch, useSelector } from "react-redux"
import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
  } from 'react-native';
import { setFinsih, setInitial, setNumberPayload, setPlusMinus } from "../Redux/Action";
import { styles } from "./styles";
import { Numbers } from "./number";
import { calculate } from "../Saga/action";

 const CalcModule = () => {
    const nomre = useSelector(state => state.calcReducer.numbersAndActions)
    const cavab = useSelector(state => state.calcReducer.answer)
    const finish = useSelector(state => state.calcReducer.isFinish)
    const dispatch = useDispatch()
    const clearAll = () => {
      dispatch(setFinsih(false))
      dispatch(setInitial());
    }
  
    const onPressNumber = (e) => {
      if (nomre.length == 0 && e == '.') {
        dispatch(setNumberPayload('0'+e))
      }
      else if (nomre.includes('.') && e == '.') {
        dispatch(setNumberPayload(e))
      }
      else {
        dispatch(setNumberPayload(e))
      }
    }

    const onPressPlusMinus = () => {
      let number = [];
      for(let i=0; i<nomre.length-1; i++){
        number[i] = nomre[i]
      }
      number[nomre.length-1]=(+nomre[nomre.length-1])*-1
      dispatch(setPlusMinus(number))
    }

    const onClickPercent = () => {
      alert('Данный функционал пока не работает')
    }
  
    const getSumm = () => {
     
      dispatch(calculate())
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
         <View >
          <Text style={styles.displayText}>
            {nomre}
          </Text>
        </View>
        <View >
          <Text style={nomre.length <=5 ? styles.displayAnswer : styles.minDisplayAnswer}>
            {finish ? cavab : nomre}
          </Text>
        </View>
        <Numbers
         onPressNumber={onPressNumber}
         getSumm={getSumm}
         onClickPercent={onClickPercent}
         clearAll={clearAll}
         onPressPlusMinus={onPressPlusMinus}
         />
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
    )
}

export default CalcModule;