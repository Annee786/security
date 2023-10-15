import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  employeimage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  employename: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightblack,
    paddingLeft:10
  },
  detailtext: {
    fontFamily: fonts.light,
    fontSize: 9,
    color: colors.lightwhite,
  },
  employeView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin:5
  },
  detailtab: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 85,
    backgroundColor: colors.cylinder,
    borderRadius: 15,
    justifyContent: 'center',
  },
  nameimageview:{
    flexDirection:'row',
    alignItems:'center',
  },

});
