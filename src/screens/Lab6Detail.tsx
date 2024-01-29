import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackParams} from '../../App';
import React from 'react';

type Lab6DetailProps = NativeStackScreenProps<StackParams, 'Lab6Detail'>;

const Lab6Detail: React.FC<Lab6DetailProps> = ({route}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}> {route.params.input}</Text>
      <Text style={styles.subWelcomeText}>ID của bạn là: 123</Text>

      <View style={styles.actionSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textButton}>Trở lại bằng - GOBACK -</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            })
          }>
          <Text style={styles.textButton}>Trở lại bằng - RESET -</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}>
          <Text style={styles.textButton}>Trở lại bằng - POP -</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.textButton}>Trở lại bằng - POPTOTOP -</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lab6Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    width: '100%',
    fontSize: 20,
    fontWeight: '600',
    color: 'blue',
  },
  subWelcomeText: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 40,
  },
  actionSection: {
    width: '100%',
    rowGap: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
  },
});
