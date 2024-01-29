import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackParams} from '../../App';
import {useState} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Lab6Params} from './Lab6Routes';

export default function Lab6Home() {
  const navigation = useNavigation<NativeStackNavigationProp<Lab6Params>>();
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}> Chào bạn, đây là màn hình chính</Text>
      <TextInput style={styles.input} value={input} onChangeText={setInput} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lab6Detail', {userName: input})}>
        <Text style={styles.textButton}>Đi tới màn hình chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'blue',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
  },
});
