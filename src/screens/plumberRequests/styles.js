import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black,
  },
  requestTab: {
    height: 160,
    padding: 10,
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
  imageView: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  imageTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  name: {
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom:5
  },
  charges: {
    color: colors.red,
    fontFamily: fonts.regular,
    fontSize: 16,
    paddingBottom:5
  },
  starimage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  time: {
    color: colors.greyLight,
    fontFamily: fonts.light,
    fontSize: 10,
  },
  number: {
    color: colors.greyLight,
    fontFamily: fonts.light,
    fontSize: 10,
  },
  cylinderView: {
    flexDirection: 'row',
  },
  nameView: {
    flexDirection: 'column',
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  chargesView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  rate:{
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: 12,
    paddingLeft: 10,
  }
});
