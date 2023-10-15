import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  userView:{
    width:'100%',
    height:330,
    backgroundColor:colors.cylinder,
    paddingHorizontal:20,
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
    alignItems:'center'
  },
  name:{
fontFamily:fonts.ExtraBold,
fontSize:24,
color:colors.black,
textAlign:'center'
  },
  phone:{
    height:13,
    width:13,
    resizeMode:'contain',
margin:5
  },
  number:{
    fontFamily:fonts.medium,
fontSize:15,
color:colors.black,
paddingRight:5
  },
  mapin:{
    height:12,
    width:10,
    resizeMode:'contain',
    margin:8
  },
  location:{  fontFamily:fonts.medium,
    fontSize:15,
    color:colors.lightgrey},

    circleView:{
    flexDirection:'row',
    alignItems:'center' ,
    alignSelf:"center" ,
    paddingVertical:10,
  
    },
    circle:{
      height:36,
      width:36,backgroundColor:colors.white,
      justifyContent:'center',
      alignItems:"center",
      borderRadius:18,
      margin:10
     
    },
    circleimage:{
      height:20,
      width:20,
      resizeMode:'contain',
    },
    jobView:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:20,
      
    },
    border:{
      height:43,
      width:'45%',
      backgroundColor:colors.tabColor,
      borderBottomColor:colors.bottomborder,
      padding:10,
      borderBottomWidth:1,

    },
    dataView:{
      height:43,
      width:'55%',
      borderBottomColor:colors.bottomborder,
      borderBottomWidth:1,
      alignSelf:'center',
      padding:10
    }
})
