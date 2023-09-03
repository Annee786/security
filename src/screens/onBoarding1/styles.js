import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
  },
  removeimage: {
    resizeMode: 'contain',
    height: 280,
    width: 280,
  },

  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 10,
  },
  mainText: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.black,
  },
  subText: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20,
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.black,
  },
  moreView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  moreimage: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});
