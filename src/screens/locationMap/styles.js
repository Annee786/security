import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  map: {
    width: '100%',
    height: 650,
    resizeMode: 'contain',
  },
  mapView: {
    height: '57%',
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  locationBox: {
    width: '90%',
    height: 170,
    backgroundColor: colors.white,
    borderColor: colors.shadow,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
  },
  locationText: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  addressTab: {
    width: '90%',
    height: 50,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  confirmTab: {
    width: '45%',
    height: 40,
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  address: {
    color: colors.black,
    fontFamily: fonts.light,
    fontSize: 14,
  },
  mapPin: {width: 25, height: 25, resizeMode: 'contain'},
  text: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 14,
  },
});
