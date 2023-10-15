import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  searchView: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  picimage: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 13,
    color: colors.cylindertext,
    margin: 8,
  },
  details: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.cylindertext,
    lineHeight: 20,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  time: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.grey,
  },
  nameimage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '80%',
  },
  textView: {
    flexDirection: 'column',
  },
  line: {
    width: '90%',
    backgroundColor: colors.border,
    borderWidth: 1,
  },
});
