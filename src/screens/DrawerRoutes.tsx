import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Lab6Home from './Lab6Home';
import Setting from './drawer-screens/Setting';
import Article from './drawer-screens/Article';
import Chat from './drawer-screens/Chat';
import Lab6Routes from './Lab6Routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Lab6Routes">
      <Drawer.Screen name="Lab6Routes" component={Lab6Routes} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({});
