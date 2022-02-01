import { useDispatch, useSelector } from "react-redux"
import React from "react"
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { setInitial, setNumberPayload, setPlusMinus } from "../calculate/redux/Action";
import { styles } from "./styles";
import { Numbers } from "./number";
import { calculate } from "./saga/action";
import { getAnswerStore, getNumbersAndActions } from "../../modules/saga/selectors";

const CalcModule = () => {
  const nomre = useSelector(getNumbersAndActions);
  const cavab = useSelector(getAnswerStore);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(setInitial());
  }

  const onPressNumber = (e) => {
    if (nomre.length == 0 && e == '.') {
      dispatch(setNumberPayload('0' + e))
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
    for (let i = 0; i < nomre.length - 1; i++) {
      number[i] = nomre[i]
    }
    number[nomre.length - 1] = (+nomre[nomre.length - 1]) * -1
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
        <Text style={nomre.length <= 5 ? styles.displayAnswer : styles.minDisplayAnswer}>
          {cavab? cavab : nomre}
        </Text>
      </View>
      <View style={styles.firstRow}>
        <Numbers
          onPressNumber={onPressNumber}
          getSumm={getSumm}
          onClickPercent={onClickPercent}
          clearAll={clearAll}
          onPressPlusMinus={onPressPlusMinus}
        />
      </View>
    </SafeAreaView>
  )
}

export default CalcModule;