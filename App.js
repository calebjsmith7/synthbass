/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Dimensions,
  StyleSheet
} from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import Home from './components/Home';
import Brown from './components/Brown';
import Blue from './components/Blue';
import Green from './components/Green';


const Stack = createStackNavigator();



function MyStack() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Brown" component={Brown} />
      <Stack.Screen name="Blue" component={Blue} />
      <Stack.Screen name="Green" component={Green} />
    </Stack.Navigator>
  );
}



export default function App() {


  React.useEffect(() => {
    SplashScreen.hide();
  });


  return (
    <NavigationContainer style={styles.nav}>
      <MyStack/>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  nav: {
    height: '100%',
    width: '100%',
    margin: 0
  }
});


