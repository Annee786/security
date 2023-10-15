import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  splashView: {
    backgroundColor: colors.blue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
logoView:{
    resizeMode:'contain',
    height:'100%',
    width:'100%'
}
});
