import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackParams} from '../../App';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'rgba(0,0,0,0)'}
      />
      <ImageBackground
        style={styles.container}
        source={require('../../assets/dummy-bg.jpg')}>
        <Text style={[styles.title, styles.textWithShadow]}>
          What is Lorem Ipsum?
        </Text>
        <Text style={[styles.subtitle, styles.textWithShadow]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    rowGap: 20,
  },
  textWithShadow: {
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 5,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 16,
    width: 150,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});
