import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image:{
height:350,
width:'100%',
marginTop:40
  },
  imageView:{
    height:'100%',
    width:'100%',
    resizeMode:'contain'
  },
  textView:{
alignItems:'center',
justifyContent:'center',
flexDirection:'column',
paddingHorizontal:10
  },
  great:{
fontFamily:fonts.bold,
fontSize:25,
color:colors.black,

  },
  subtext:{
    fontFamily:fonts.medium,
fontSize:14,
color:colors.black,
paddingTop:10

  }

})