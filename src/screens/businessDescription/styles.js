import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  personalinfoView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  text: {
    color: colors.grey,
    fontFamily: fonts.medium,
    fontSize: 12,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  subText:{
    fontFamily:fonts.semiBold,
    fontSize:14,
    color:colors.grey,
    paddingHorizontal:20,
    paddingVertical:10
  },
  tabView:{
    flexDirection:'row',

  }
});
