import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  forgetView: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  forgetText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: fonts.medium,
  },

  line: {
    width: 122,
    borderBottomColor: colors.blue,
    borderWidth: 0.5,
  },
  continueView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  continueText: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.light,
    padding: 10,
  },
  lineView: {
    width: 100,
    borderBottomColor: colors.grey,
    borderWidth: 0.5,
  },
  text: {
    color: colors.grey,
    fontSize: 14,
    fontFamily: fonts.light,
  },
  signupText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  signupView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 20,
  },
});
