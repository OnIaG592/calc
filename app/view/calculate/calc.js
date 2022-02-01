import { useDispatch, useSelector } from "react-redux"
import React, { useMemo } from "react"
import {
  View,
  Text,
} from 'react-native';
import { styles } from "./styles";
import { Numbers } from "./number";
import { calculate } from "./saga/action";
import { getAnswerStore, getNumbersAndActions } from "../../modules/saga/selectors";
import { numbersAndActions } from "../../../__mock__";

const CalcModule = () => {
  const nomre = useSelector(getNumbersAndActions);
  const cavab = useSelector(getAnswerStore);
  const dispatch = useDispatch();
  
  const onPressNumber = (item) => {
    dispatch(calculate(item))
  }

  const renderItem = useMemo(() => numbersAndActions.map((item,index) =><Numbers item={item} key={item+index} onPress={onPressNumber} />) ,[])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{flex:0.1}}>
        <Text style={styles.displayText}>
          {nomre}
        </Text>
      </View>
      <View style={{flex:0.2}}>
        <Text style={nomre.length <= 5 ? styles.displayAnswer : styles.minDisplayAnswer}>
          {cavab? cavab : nomre}
        </Text>
      </View>
      <View style={styles.firstRow}>
        {renderItem}
      </View>
    </View>
  )
}

export default CalcModule;