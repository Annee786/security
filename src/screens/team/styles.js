import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  boxView:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
    height:210,
    width:'50%',
    borderColor:colors.lightgrey,
    backgroundColor:colors.white,
    borderRadius:10,
    marginLeft:20
  },
  imageView:{
alignItems:'center',
justifyContent:'center',

  },
    
    

  dotsimage:{
    height:20,
    width:20,
    resizeMode:'contain',
  },
   
  picimage:{
    height:100,
    width:100,
    resizeMode:'contain'
  },
  name:{
    fontFamily:fonts.semiBold,
    fontSize:14,
    color:colors.lightblack,
    paddingTop:5

  },
  ceo:{
    fontFamily:fonts.semiBold,
    fontSize:12,
    color:colors.lightblack
  },

  chatTab:{
    height:25,
    width:'45%',
    borderColor:colors.cgreen,
    backgroundColor:colors.cgreen,
    borderRadius:8,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5
  },
  chat:{
    fontFamily:fonts.light,
    fontSize:10,
    color:colors.white
  },
})