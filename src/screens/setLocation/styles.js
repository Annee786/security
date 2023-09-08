import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  customText:{
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.gray,
    paddingHorizontal:20,
  
  },
  distanceView:{
    height:1,
    width:'90%',
    borderColor:colors.cylinder,
    borderWidth:2,
    alignSelf:'center',
  
    
  },
  miles11:{
    height:40,
    width:'90%',
    alignItems:"center",
    justifyContent:'center'
  },
  distance:{
    height:1,
    width:'40%',
    borderColor:colors.blue,
    borderWidth:2,
  },
  lineView:{
    flexDirection:'row',
  },
  circle:{
    height:20,
    width:20,
    borderColor:colors.blue,
    backgroundColor:colors.blue,
    borderRadius:10,
    borderWidth:1,
    alignSelf:'flex-end',
  },
  milesText:{
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.black,
  },
  miles:{
height:50,
width:'100%',
flexDirection:'row',
justifyContent:'space-between',
paddingHorizontal:20,
paddingVertical:10

  },
  milestext11:{
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.grey,
  },
  mapimage:{
    height:'100%',
    width:'90%',
    resizeMode:'contain'
  },
  map:{
    height:300,
    width:'100%',
paddingHorizontal:20
  },
  mapin:{
    height:50,
    width:50,
    resizeMode:'contain'
  },
  map: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    alignItems:"center",
    justifyContent:'center'
  },
  mapView: {
    height: '40%',
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  mapPin: {width: 25, height: 25, resizeMode: 'contain',alignItems:'center'},

})