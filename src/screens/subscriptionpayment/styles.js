import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscriptionPlan: {
    height: 140,
    width: '90%',
    borderColor: colors.shadow,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  finderView: {
    height: 50,
    width: '50%',
  },
  findertext: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.black,
  },
  detailtext: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.grey,
  },
  planimage: {
    height: 60,
    width: '100%',
    resizeMode: 'contain',
  },
  serviceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  chargesrate: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.blue,
  },
  plumfinder: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.black,
  },
  textView: {
    flexDirection: 'column',
  },
  vat: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.grey,
  },
});
