import { Pressable, Text, View } from "react-native"
import React from "react"
import { styles } from './styles'


export const Numbers = ({onPressNumber, getSumm, onClickPercent, clearAll, onPressPlusMinus}) => {
    const numbersAndActions = ['ac', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+']

    const colors = {
        0: 'grey',
        1: 'grey',
        2: 'grey',
        3: 'orange',
        4: '#423e3e',
        5: '#423e3e',
        6: '#423e3e',
        7: 'orange',
        8: '#423e3e',
        9: '#423e3e',
        10: '#423e3e',
        11: 'orange',
        12: '#423e3e',
        13: '#423e3e',
        14: '#423e3e',
        15: 'orange',
        16: '#423e3e',
        17: '#423e3e',
        18: '#423e3e',
        19: '#423e3e',
    }
    
    const onPressAnyAction = (item) => {
        if(item == '=') {
            getSumm()
        }
        else if (item == 'ac') {
            clearAll()
        }
        else if (item == '%') {
            onClickPercent()
        }
        else if (item =='+/-'){
            onPressPlusMinus()
        }
        else {onPressNumber(item)}
    }

    return (
        <View style={styles.firstRow}>
       { numbersAndActions.map((item, index) =>
                <Pressable key={`${item+index}`} style={[styles.buttonOrange,{backgroundColor:colors[index]}]} onPress={()=>onPressAnyAction(item)} >
                    <Text style={styles.text}>{item}</Text>
                </Pressable>)}
            </View>
        )
}