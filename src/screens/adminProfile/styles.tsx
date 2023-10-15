import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  userView:{
    width:'100%',
    height:150,
    backgroundColor:colors.background,
    paddingVertical:20
  },
  arrow:{
    resizeMode:'contain',
    height:25,
    width:25
  },
  imageView:{
    height:110,
    width:110,
    borderRadius:55,
    backgroundColor:colors.blue,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  albert:{
    height:90,
    width:90,
    resizeMode:'contain'
  },
  albertView:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20
  },
  name:{
fontFamily:fonts.bold,
fontSize:24,
color:colors.black,
textAlign:'center'
  },
  phone:{
    height:13,
    width:13,
    resizeMode:'contain',
margin:5,
tintColor:colors.blue
  },
  number:{
    fontFamily:fonts.regular,
fontSize:15,
color:colors.black,
paddingRight:5
  },
  mapin:{
    height:12,
    width:10,
    resizeMode:'contain',
    margin:8,
    tintColor:colors.blue

  },
  location:{  fontFamily:fonts.regular,
    fontSize:15,
    color:colors.lightgrey},
  
    dataView:{
      height:50,
      width:'58%',
      backgroundColor:colors.tabColor,
      borderBottomColor:colors.bottomborder,
      borderBottomWidth:1,
    justifyContent:'center',
    paddingHorizontal:10,

    
    },
    jobView:{
      flexDirection:'row',
      alignItems:'center',
 width:'90%',
 alignSelf:'center'


      
    },
    border:{
      height:50,
      width:'40%',
      backgroundColor:colors.tabColor,
      borderBottomColor:colors.bottomborder,
      padding:10,
      borderBottomWidth:1,

  

    },
  
    data:{
      fontFamily:fonts.medium,
      fontSize:13,
      color:colors.grey,
      paddingLeft:5
    },
    ans:{
      fontFamily:fonts.medium,
      fontSize:13,
      color:colors.black,
      textAlign:'right'

    },
    row:{
      flexDirection:'row',
      alignItems:'center'
    }
})