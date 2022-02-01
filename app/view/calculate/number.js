import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from './styles';

export const Numbers = ({ item, onPress}) => {

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
        <Pressable style={() => getStyle(item)} onPress={() => onPress(item)} >
            <Text style={styles.text}>{item}</Text>
        </Pressable>
    )
}