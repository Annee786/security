import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  addressView: {
    flexDirection: 'row',
    height: 90,
    width: '90%',
    backgroundColor: colors.white,
    borderColor: colors.shadow,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
  },
  textView: {
    flexDirection: 'column',
    height:60,
  },
  mapin: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    tintColor: colors.white,
  },
  mapinView: {
    backgroundColor: colors.blue,
    height: 35,
    width: 35,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.black,
    paddingLeft: 10,
  },
  subAdres: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.black,
    paddingLeft: 10,

  },
  edit: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.blue,
    alignSelf: 'flex-start',
    padding: 15,
  
  },
  cylinderView: {
    flexDirection: 'row',
  },
  inputView: {
    paddingVertical: 10,
  },
  dateView: {
    flexDirection: 'row',
    marginBottom:30
  },
});
