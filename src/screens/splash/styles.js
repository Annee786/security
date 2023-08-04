import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  splashView: {
    backgroundColor: colors.lightblack,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: colors.white,
    fontFamily: fonts.bold,
  },
});
