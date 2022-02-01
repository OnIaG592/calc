import React from "react";
import { Pressable, Text, View } from "react-native";

export const SplashScreen = ({navigation}) => {

    return (
        <View>
            <Pressable>
                <Text onPress={() => navigation.navigate('movieScreen')}>
                MovieScreen
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('CalcModule')}>
            <Text>
                CalcModule
                </Text>
            </Pressable>
        </View>
    )
}