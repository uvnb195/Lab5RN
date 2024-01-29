import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomActionBar from '../components/ActionBar';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../App';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export default function () {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'rgba(0,0,0,0)'}
      />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/dummy-bg.jpg')}>
        <SafeAreaView style={styles.container}>
          <CustomActionBar onClick={() => navigation.pop()} />
          <View style={{rowGap: 20}}>
            <Text style={styles.title}>Phố cổ Hội An</Text>
            <View style={styles.contentContainer}>
              <View style={styles.content}>
                <Text style={styles.location}>
                  <EntypoIcons name="location-pin" size={24} /> Quảng Nam
                </Text>
                <Text style={styles.subtitle}>Thông tin chuyến đi</Text>
                <Text style={styles.desc} numberOfLines={6}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </View>
              <View style={styles.bottom}>
                <Text style={styles.bottomText}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>$100</Text>
                  /ngày
                </Text>
                <TouchableOpacity style={styles.bottomButton}>
                  <Text style={styles.bottomButtonText}>Đặt ngay</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.floating}>
                <Text style={styles.floatingText}>
                  <AntDesignIcons name="star" color={'#ffff00'} size={24} /> 5.0
                </Text>
                <View style={styles.floatingIcon}>
                  <AntDesignIcons name="heart" size={28} color={'#ff005b'} />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    rowGap: 20,
  },
  contentContainer: {
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  content: {
    padding: 20,
    marginTop: 20,
    rowGap: 16,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: '700',
    paddingHorizontal: 20,
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    fontFamily: 'PlayfairDisplay',
  },
  location: {
    fontSize: 20,
    fontWeight: '700',
    color: 'blue',
    alignItems: 'center',
  },
  subtitle: {fontSize: 20, fontWeight: '700', color: 'black'},
  desc: {fontSize: 16},
  bottom: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1b7593',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
  },
  bottomText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    padding: 8,
  },
  bottomButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 150,
    borderRadius: 8,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'blue',
  },
  floating: {
    position: 'absolute',
    end: 16,
    top: -50,
    alignItems: 'center',
  },
  floatingText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: -5, height: 5},
  },
  floatingIcon: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 16,
    elevation: 10,
  },
});
