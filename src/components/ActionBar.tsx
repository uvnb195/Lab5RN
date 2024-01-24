import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

type CustomActionBarProps = {
  onClick: () => void;
};

export default function CustomActionBar(props: CustomActionBarProps) {
  return (
    <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.0)']}>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onClick}>
          <FeatherIcons
            name="chevron-left"
            size={40}
            color={'white'}
            style={styles.shadowICon}
          />
        </TouchableOpacity>
        <EntypoIcons
          name="dots-three-vertical"
          size={26}
          color={'white'}
          style={styles.shadowICon}
        />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  shadowICon: {},
});
