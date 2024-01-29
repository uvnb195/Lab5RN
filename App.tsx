import 'react-native-gesture-handler';
import React from 'react';
import HoiAn from './src/screens/HoiAn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Lab6Home from './src/screens/Lab6Home';
import Lab6Detail from './src/screens/Lab6Detail';
import Lab6Routes from './src/screens/Lab6Routes';
import DrawerRoutes from './src/screens/DrawerRoutes';

export type StackParams = {
  Home: undefined;
  Detail: undefined;
  DrawerRoutes: undefined;
  // Lab6Home: undefined;
  // Lab6Detail: {
  //   input: string;
  // };
};
const RootStack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Detail" component={HoiAn} />
        <RootStack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
