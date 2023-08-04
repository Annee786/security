import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  startupView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  startupText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  box: {
    height: 40,
    width: '95%',
    backgroundColor: colors.green,
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  teamView:{
    height:300,
    width:'90%',
    borderRadius:10,
    borderColor:colors.lightgrey,
    borderWidth:1,
    backgroundColor:colors.blue
  },

  team:{
    height:100,
    width:'90%',
    resizeMode:'contain',
    
  },
  joiningText:{
    fontFamily:fonts.semiBold,
    fontSize:14,
    color:colors.lightblack
  },
  subText:{
    fontFamily:fonts.regular,
    fontSize:12,
    color:colors.lightblack  
  },
  text:{
  fontFamily:fonts.light,
  fontSize:12,
  color:colors.lightblack},

  workingImage:{
    height:30,
    width:30,
    resizeMode:'contain',
  },
  workingArea:{
    height:200,
    width:'95%',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
borderColor:colors.lightgrey,
backgroundColor:colors.white,
borderRadius:10,
paddingHorizontal:10
  },
  startText:{
    fontFamily:fonts.regular,
    fontSize:10,
    color:colors.white
  },
  imageCircle:{
    height:40,
    width:40,
    borderRadius:20,
    borderColor:colors.lightgrey,
    borderWidth:1,
    backgroundColor:colors.white,
    justifyContent:'center',
    alignItems:'center'
  },

  startTab:{
    height:40,
    width:100,
    borderColor:colors.purple,
    backgroundColor:colors.purple,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:50


    
  }
});
