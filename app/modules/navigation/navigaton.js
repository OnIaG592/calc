import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CalcModule from "../../view/calculate/calc";
import { MovieScreen } from "../../view/movieScreen";
import { SplashScreen } from "../../view/splashScreen";
import { createStackNavigator } from '@react-navigation/stack'


export const Navigator = () => {

  const Stack = createStackNavigator()

    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name='movieScreen' component={MovieScreen} options={{headerShown: false}}/>
          <Stack.Screen name='CalcModule' component={CalcModule} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}