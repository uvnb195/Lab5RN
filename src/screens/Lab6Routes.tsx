import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Lab6Home from './Lab6Home';
import Lab6Detail from './Lab6Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {StackParams} from '../../App';
import DrawerRoutes from './DrawerRoutes';

const Lab6Stack = createNativeStackNavigator<Lab6Params>();

export type Lab6Params = {
  Lab6Home: undefined;
  Lab6Detail: {
    parentNavigation?: NativeStackNavigationProp<StackParams>;
    userName?: string;
  };
  DrawerRoutes: undefined;
};

export default function Lab6Routes() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <Lab6Stack.Navigator screenOptions={{headerShown: false}}>
      <Lab6Stack.Screen name="Lab6Home" component={Lab6Home} />
      <Lab6Stack.Screen name="Lab6Detail" component={Lab6Detail} />
    </Lab6Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
