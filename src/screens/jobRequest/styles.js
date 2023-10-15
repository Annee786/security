import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  borderView: {
    height: 190,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 10,
  },
  jobsview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  imageView: {
    height: 38,
    width: 38,
    resizeMode: 'contain',
  },
  jobvenue: {
    fontFamily: fonts.light,
    fontSize: 11,
    color: colors.blakishgrey,
    paddingLeft: 10,
  },
  logoname: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.blakishgrey,
    paddingLeft: 10,
  },
  textView: {
    flexDirection: 'column',
  },
  charges: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.blue,
    textAlign: 'right',
  },
  permonth: {
    fontFamily: fonts.extraLight,
    fontSize: 9,
    color: colors.blakishgrey,
  },
  dateview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  calender: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    height: 35,
    width: '45%',
    borderColor: colors.cylinder,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 7,
  },
  check: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  tab2: {
    height: 35,
    width: '45%',
    borderColor: colors.cylinder,
    borderWidth: 1,
    backgroundColor: colors.cylinder,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 7,
  },
  accept: {
    fontFamily: fonts.light,
    fontSize: 11,
    color: colors.white,
    paddingLeft: 10,
  },
  textView2: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
