import { Pressable, Text, View } from "react-native"
import React from "react"
import { styles } from './styles'
import { numbersAndActions } from "../../../__mock__"


export const Numbers = ({ onPressNumber, getSumm, onClickPercent, clearAll, onPressPlusMinus }) => {


    const onPressAnyAction = (item) => {
        if (item == '=') {
            getSumm()
        }
        else if (item == 'ac') {
            clearAll()
        }
        else if (item == '%') {
            onClickPercent()
        }
        else if (item == '+/-') {
            onPressPlusMinus()
        }
        else { onPressNumber(item) }
    }

    const getStyle = (item) => {
        switch (item) {
            case 'ac':
            case '+/-':
            case '%':
                return styles.buttonGrey;
            case '/':
            case '*':
            case '-':
            case '+':
            case '=':
                return styles.buttonOrange;
            case '0':
                return styles.buttonZero
            default: return styles.buttonBlack
        }
    }

    return (
        numbersAndActions.map((item, index) =>
            <Pressable key={`${item + index}`} style={() => getStyle(item)} onPress={() => onPressAnyAction(item)} >
                <Text style={styles.text}>{item}</Text>
            </Pressable>)
    )
}