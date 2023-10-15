import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  addingView:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    paddingBottom:20

  },
  circle:{
    height:50,
    width:50,
    backgroundColor:colors.circle,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
  },
  camera:{
    height:20,
    width:20,
    resizeMode:'contain'
  },
  addtext:{
    fontFamily:fonts.medium,
    fontSize:12,
    color:colors.cylindertext,
    paddingLeft:10
  }
})