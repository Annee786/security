import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  notificationView: {
    height: 90,
    flexDirection: 'row',
    width: '90%',
    borderColor: colors.shadow,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logo: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
  },
  logoImage: {
    height: 80,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.black,
  },
  subText: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.black,
    paddingVertical: 5,
  },
  sideText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.grey,
  },
  textView: {
    flexDirection: 'column',
    height: 90,
    width: '65%',
    paddingVertical: 15,
    paddingLeft: 5,
  },
  sidetextview: {height: 80, width: '15%', paddingVertical: 20},
});
