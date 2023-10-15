import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  historyView:{
    flexDirection:'row',
    alignItems:"center",paddingHorizontal:20,
    justifyContent:'space-between',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
backgroundColor:colors.white,
height:70,
width:'90%',
alignSelf:'center',
borderRadius:10,
margin:8

  },
  picture:{
    height:39,
    width:39,
    resizeMode:'contain'
  },
  name:{
fontFamily:fonts.semiBold,
fontSize:14,
color:colors.blakishgrey
  },
  jobs:{
    fontFamily:fonts.light,
fontSize:11,
color:colors.blakishgrey
  },
  charges:{
    fontFamily:fonts.semiBold,
fontSize:14,
color:colors.cylinder,
textAlign:'right'
  },
  total:{
    fontFamily:fonts.light,
fontSize:11,
color:colors.blakishgrey
  },
  coloumn:{
    flexDirection:'column',
    paddingLeft:10
  },
  row:{
    flexDirection:'row'
  }
})