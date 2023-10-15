import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  venueView:{
    width:'90%',
    flexDirection:'row',
    height:70,
    paddingHorizontal:20,
    alignSelf:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
borderRadius:10,
backgroundColor:colors.white,
alignItems:'center' ,
justifyContent:'space-between',
margin:8},

  venueimages:{
    height:38,
    width:38,
    resizeMode:'contain'
  },
  venuname:{
fontSize:14,
fontFamily:fonts.medium,
color:colors.lightblack,
  },
  textView:{

  },
  id:{
    fontSize:11,
    fontFamily:fonts.light,
    color:colors.lightblack 
  },
  phone:{
    height:18,
    width:18,
    resizeMode:'contain'
  },
  circle:{
    height:32,
    width:32,
    backgroundColor:colors.cylinder,
    borderRadius:16,justifyContent:'center',
    alignItems:'center', }
  
})