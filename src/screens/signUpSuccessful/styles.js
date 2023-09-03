import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  text:{
    color: colors.grey,
    fontSize: 14,
    fontFamily: fonts.light, 
  },
  signupText:{
    color: colors.blue,
    fontSize: 14,
    fontFamily: fonts.medium, 
  },
  signupView:{
    flexDirection:'row',
    alignSelf:'center',
    paddingVertical:20
  }

})