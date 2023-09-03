import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  customText:{
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.gray,
    paddingHorizontal:20,
    paddingBottom:10
  },
  text:{
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.black,
 
  },
  textView:{
paddingHorizontal:20,
paddingVertical:10,

justifyContent:'space-between',
flexDirection:'row'
  },
  imageView:{
    height:20,
    width:20,
    resizeMode:'contain',
   
 
  }
})