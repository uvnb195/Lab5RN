import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

export default function Setting() {
  return (
    <View style={drawerStyles.container}>
      <Text style={drawerStyles.text}>Setting</Text>
    </View>
  );
}
export const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
    fontWeight: '600',
  },
});
