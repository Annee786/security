import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  jobtitle:{
    fontFamily:fonts.semiBold,
    fontSize:16,
    color:colors.greyLight,
    paddingHorizontal:20,
    paddingTop:20
  },
  title:{
    fontFamily:fonts.bold,
    fontSize:20,
    color:colors.black,
   
  
  },
  jobtitleView:{
    height:60,
    width:'100%',
    flexDirection:'row',
    paddingHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:5
  },
  offerBox:{
    height:40,
    width:'40%',
    backgroundColor:colors.white,
    borderColor:colors.blue,
    borderRadius:25,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },
  ratetext:{
    fontFamily:fonts.bold,
    fontSize:14,
    color:colors.blue, 
  },
  text:{
    height:60,
    width:'55%',
  },
  bathView:{
    height:100,

    width:'100%',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
paddingHorizontal:30


  
  },
  image:{
    height:'100%',
    width:'50%',
    resizeMode:'contain',
    margin:10

  },

  Text:{
    fontFamily:fonts.regular,
    fontSize:14,
    color:colors.black, 
    paddingHorizontal:20,

  },
  cylinder:{
    flexDirection:'row'
  },
  dateView:{
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    flexDirection:'row',
    paddingVertical:5,
  },
  datetext:{
    fontFamily:fonts.regular,
    fontSize:14,
    color:colors.greyLight, 
  },
  timetext:{
    fontFamily:fonts.regular,
    fontSize:14,
    color:colors.black,
  }
})