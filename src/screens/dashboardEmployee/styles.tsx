import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  dashboardview: {
    height: 55,
    width: '45%',
    backgroundColor: colors.lightblue,
    borderRadius: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  imageview: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor:colors.white
  },
  circle: {
    height: 38,
    width: 38,
    backgroundColor: colors.cylinder,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobstext: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.blue,
    margin: 10,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 79,
  },

  clocktext: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.blakishgrey,
  },
  textView: {
    flexDirection: 'column',
    margin: 10,
  },
  venu: {
    fontSize: 11,
    fontFamily: fonts.light,
    color: colors.blakishgrey,
    lineHeight: 20,
  },
  loginview: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
   
  },
  timetext: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.blakishgrey,
    lineHeight: 20,
    textAlign: 'right',
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.light,
    color: colors.blakishgrey,
  },
  imagetextView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
