import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },

  forgettext: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.light,
    textAlign:'right',
    paddingHorizontal:15
  },

});
