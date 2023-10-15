import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  topview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:20
  },
  addText:{
    fontFamily:fonts.semiBold,
    fontSize:16,
    color:colors.breadcrum
  },
  uploadtext:{
    fontFamily:fonts.medium,
    fontSize:12,
    color:colors.cylinder
  },
  nameView:{
    flexDirection:'row'
  }
})
