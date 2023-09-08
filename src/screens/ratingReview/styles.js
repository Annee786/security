import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  review:{
height:230,
width:'90%',
marginTop:10,
alignSelf:'center',
borderColor:colors.shadow,
backgroundColor:colors.white,
borderRadius:10,
borderWidth:1,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,

  },
  imageRachel:{
    height:30,
    width:30,
    resizeMode:'contain'
  },
  imagetextView:{
flexDirection:"row",
paddingHorizontal:10,
marginVertical:10,
alignItems:'center'
  },
  name:{
fontFamily:fonts.semiBold,
fontSize:14,
color:colors.black,
paddingLeft:10
  },
  rachelView:{
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.black, 
    paddingHorizontal:20
  },
  bathroom:{
    height:50,
    width:50,
    resizeMode:'contain',
    margin:5

  },
  dateView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15
  },
  date:{
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.greyLight,
  }
})