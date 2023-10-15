import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageView: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  greychatbox: {
    height: 52,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 20,
  },
  chatText1: {
    fontFamily: fonts.light,
    fontSize: 11,
    color: colors.grey,
  },

  time: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.grey,
    margin: 5,
  },
  chat: {
    height: 86,
    width: 260,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  chatText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.white,
    lineHeight: 16,
  },
  anstime: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.grey,
    textAlign: 'right',
    paddingHorizontal: 45,
    paddingVertical: 5,
  },
});
