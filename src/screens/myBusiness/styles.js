import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  myBusinessView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  heading:{
flexDirection:'row',
paddingHorizontal:50,
paddingVertical:20,
justifyContent:'center',
    alignItems:'center',
  },
  headingText:{
    fontFamily:fonts.bold,
    fontSize:16,
    color:colors.jetblack,
  

  },

  businessBox:{
    height:180,
    width:'90%',
    borderRadius:20,
    borderColor:colors.shadowBox,
    borderWidth:2,
    marginTop:20,
    marginLeft:15,
    backgroundColor:colors.shadowBox,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
  },
  text:{
    fontFamily:fonts.bold,
    fontSize:25,
    color:colors.blue
  },
  optionBox:{
    height:80,
    width:'95%',
borderColor:colors.optionBoxColor,
backgroundColor:colors.optionBoxColor,
borderRadius:35,
marginTop:50,
  },
  plusimage:{
    height:20,
    width:20,
    resizeMode:'contain'
  },
  Polygon:{
   justifyContent:'flex-end',
   alignItems:'center',

  },

  polygonimage:{
    height:50,
    width:50,
    resizeMode:'contain',
      },
  imagesView:{
    height:30,
    width:30,
    resizeMode:'contain'
  },
  optionText:{
    fontFamily:fonts.bold,
    fontSize:12,
    color:colors.blue 
  }
});