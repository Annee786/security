import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  uploadBox:{
    height:250,
    width:'90%',
    backgroundColor:colors.white,
    borderRadius:10,
    borderWidth:2,
    borderColor:colors.blue,
    alignSelf:'center',
    alignItems:'center',
    borderStyle:'dashed',
    marginTop:10,
    paddingVertical:15
  },
  boxtext:{ 
    fontFamily:fonts.medium,
    fontSize:12,
    color:colors.greyDark,
  
  },
  tab:{
    height:45,
    width:'40%',
    backgroundColor:colors.blue,
    borderRadius:25,
    borderWidth:1,
    borderColor:colors.blue,
    alignSelf:'center',
    justifyContent:'center',
alignItems:'center',
marginTop:10,
flexDirection:'row'

  },
  upload:{
    fontFamily:fonts.semiBold,
    fontSize:12,
    color:colors.white,
    paddingLeft:5
  },
  dateView:{
    flexDirection:'row',
  },
  plusimage:{
    height:15,
    width:15,
    resizeMode:'contain',
    tintColor:colors.white
  },
  tapimage:{
    height:60,
    width:60,
    resizeMode:'contain',
    margin:8

  },
  tapView:{
    flexDirection:'row',
    paddingVertical:20,
    

  }
})