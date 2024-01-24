import React from 'react';
import HoiAn from './src/screens/HoiAn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';

export type StackParams = {
  Home: undefined;
  Detail: undefined;
};
const RootStack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Detail" component={HoiAn} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
