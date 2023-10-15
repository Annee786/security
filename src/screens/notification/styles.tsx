import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  updateview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '90%',
    height: 70,
    borderBottomColor: colors.searchtab,
    borderBottomWidth: 1,
    margin: 5,
  },
  name: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.blakishgrey,
  },
  detail: {
    fontFamily: fonts.light,
    fontSize: 11,
    color: colors.grey,
  },
  time: {
    fontFamily: fonts.medium,
    fontSize: 11,
    color: colors.blue,
  },
  imageview: {
    height: 51,
    width: 51,
    resizeMode: 'contain',
  },
  coloumview: {
    flexDirection: 'column',
    paddingLeft: 10,
    width: '75%',
  },
  justify: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {width: '20%', height: 50},
});
