import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  danialjobView:{
    height:75,
    width:'45%',
    borderRadius:10,
    backgroundColor:colors.lightsea,
    borderColor:colors.lightsea,
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginTop:10,
   

  },
  circle:{
    height:40,
    width:40,
    borderRadius:20,
    backgroundColor:colors.white,
    borderColor:colors.white,
    alignItems:'center',
justifyContent:'center'
  },
  plumber:{
    resizeMode:'contain',
    height:30,
    width:30
  },
  textView:{
fontFamily:fonts.semiBold,
fontSize:14,
color:colors.black,

  },
  jobView:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  jobitemsView:{
height:50,
width:'45%',
borderColor:colors.blue,
borderWidth:1,
justifyContent:'space-between',
marginLeft:10,
borderRadius:25,
alignItems:'center',
flexDirection:'row',
paddingHorizontal:15,
marginTop:10
  },
  jobsitem:{
fontFamily:fonts.regular,
fontSize:12,
color:colors.black
  },
  cross:{
height:10,
width:10,
resizeMode:'contain'
  },
  container: {
    marginTop:10,
    height:150,
    width:'90%',
    borderRadius:15,
    paddingVertical:20,
    borderColor:colors.shadow,
    backgroundColor:colors.white,
    paddingHorizontal:15,
    alignSelf:'center',
borderWidth:1,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },

  imageView: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  jobtitle: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.black,
     

  },
  dateText: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: colors.grey,
    paddingLeft: 5,  

  },
  $Text: {
    color: colors.red,
    fontFamily: fonts.semiBold,
    fontSize: 14,

  },
  textView: {
    color: colors.blue,
    fontFamily: fonts.medium,
    fontSize: 11, 
    paddingVertical:5,
  },
  imagedateView:{
    flexDirection:'row',
    alignItems:'center',
   
  },
  calenderimage:{
    height:10,
    width:10,
    resizeMode:'contain'
  },

  imagetext:{
 
    flexDirection:'row',
  paddingHorizontal:10,
  justifyContent:'space-between',
  width:'85%',
  alignItems:'center'
 

  },
  cylinderview:{
    flexDirection:'row',
    alignItems:'center',
 
   
  },
  pindateview:{
    alignItems:'center',
    flexDirection:'row'
  }
})