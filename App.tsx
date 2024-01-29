import React from 'react';
import HoiAn from './src/screens/HoiAn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Lab6Home from './src/screens/Lab6Home';
import Lab6Detail from './src/screens/Lab6Detail';

export type StackParams = {
  Home: undefined;
  Detail: undefined;
  Lab6Home: undefined;
  Lab6Detail: {
    input: string;
  };
};
const RootStack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Lab6Home">
        <RootStack.Screen name="Lab6Home" component={Lab6Home} />
        <RootStack.Screen name="Lab6Detail" component={Lab6Detail} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Detail" component={HoiAn} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
