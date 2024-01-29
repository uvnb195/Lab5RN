import {StyleSheet, Text, View} from 'react-native';
import {drawerStyles} from './Setting';

export default function Article() {
  return (
    <View style={drawerStyles.container}>
      <Text style={drawerStyles.text}>Setting</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
