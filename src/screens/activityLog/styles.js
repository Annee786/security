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
    listView:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:20,
      justifyContent:'space-between'
    },
    company:{
  height:35,
  width:35,
  resizeMode:'contain'
    },
    name1:{
  fontFamily:fonts.regular,
  fontSize:13,
  color:colors.lightblack,
  margin:10
    },
    charges:{
      fontFamily:fonts.regular,
      fontSize:15,
      color:colors.blue},
    down:{
      height:10,
      width:12,
      resizeMode:'contain',
      margin:10
  },
  imagetext:{
      flexDirection:'row',
      alignItems:'center',
    
  },
  clockView:{
    flexDirection:'row',
alignItems:'center' ,
justifyContent:'space-between',
paddingHorizontal:20,
height:79
},

clocktext:{
fontSize:14,
fontFamily:fonts.medium,
color:colors.blakishgrey,
  },
  textView:{
flexDirection:'column',
margin:10
  },
  venu:{
    fontSize:11,
    fontFamily:fonts.light,
    color:colors.blakishgrey ,
    lineHeight:20
  },
  loginview:{
    height:24,
    width:24,
    resizeMode:'contain',

  },
  timetext:{
    fontSize:13,
    fontFamily:fonts.medium,
    color:colors.red ,
    lineHeight:20

  },
  date:{
    fontSize:11,
    fontFamily:fonts.light,
    color:colors.blakishgrey 
  },
  imagetextView:{
    alignItems:'center',
    flexDirection:'row'
  }

})