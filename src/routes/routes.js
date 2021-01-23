import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/landing';
import Home from '../screens/home';


export default function Routes() {
  const {Navigator, Screen} = createStackNavigator();
  
 return (
  <NavigationContainer>
    <Navigator initialRouteName='Landing'>
      <Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Navigator>
  </NavigationContainer>
  );
}