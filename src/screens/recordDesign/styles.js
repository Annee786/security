import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  weekView:{
    flexDirection:'row',
height:50,
width:'90%',
    paddingHorizontal:10,
    borderBottomColor:colors.lightgrey,


  },
  months:{
    fontFamily:fonts.medium,
    fontSize:12,
    color:colors.days
  },
dates:{
  fontFamily:fonts.medium,
  fontSize:12,
  color:colors.days
},
descriptionView:{
  height: 320,
  width: '90%',
  borderColor: colors.desciptionbox,
  backgroundColor: colors.desciptionbox,
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
paddingHorizontal:10,
alignSelf:'center',
marginTop:20},


subtext:{
  fontFamily: fonts.light,
  fontSize: 12,
  color: colors.lightblack,
},
mainText:{
  fontFamily: fonts.semiBold,
  fontSize: 14,
  color: colors.lightblack,
  padding:5
},
description:{
  flexDirection:'row',
  alignItems:'center',
  paddingVertical:20,

},
upImage:{
  height: 15,
  width: 15,
  resizeMode: 'contain',
  tintColor:'black',
},
shareTab:{
  height: 50,
  flexDirection:'row',
  width: '45%',
  borderColor: colors.fileShade,
  backgroundColor: colors.fileShade,
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
paddingHorizontal:10,
alignSelf:'center',
marginTop:20,},
linkImage:{
  height: 20,
  width: 20,
  resizeMode: 'contain',
},

shareView:{
  flexDirection:'row'
},
markimage:{
  height: 25,
  width: 25,
  resizeMode: 'contain', 
},
cubanTab:{
  height: 50,
  flexDirection:'row',
  width: '50%',
  borderColor: colors.fileShade,
  backgroundColor: colors.cgreen,
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
alignSelf:'center',
marginTop:20,
justifyContent:'center',

}

})