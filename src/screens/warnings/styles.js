import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mark:{
    fontFamily:fonts.regular,
    fontSize:14,
    color:colors.jetblack,
    paddingLeft:5
  },
  markView:{
flexDirection:'row',
paddingHorizontal:20,
  },
  markImage:{
    height:40,
    width:40,
    resizeMode:'contain',
    
  },
  postion:{
    fontFamily:fonts.light,
    fontSize:10,
    color:colors.lightblack,
    paddingLeft:5
  },
  chatBox:{
    height:30,
    width:'25%',
    backgroundColor:colors.lightblue,
    borderColor:colors.lightblue,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  warnings:{
    height:40,
    flexDirection:'row',
    width:'90%',
    backgroundColor:colors.pink,
    borderColor:colors.pink,
    justifyContent:'space-between',
paddingHorizontal:10,
alignSelf:'center',
    borderRadius:10,
    alignItems:'center',
    marginTop:20

  },
  warningsText:{
    fontFamily:fonts.semiBold,
    fontSize:14,
    color:colors.lightblack,
  },
  warningImage:{
    height:20,
    width:20,
    resizeMode:'contain',
  },
  numbersView:{
    flexDirection:"row",
 alignItems:'center'
  },
  text:{
    color:colors.red,
    fontFamily:fonts.light,
    fontSize:16,
    paddingRight:5
  },
  reasonBox:{
    height:150,
    width:'90%',
    backgroundColor:colors.lightgrey,
    borderColor:colors.lightgrey,
paddingHorizontal:10,
alignSelf:'center',
    borderRadius:10,
    paddingVertical:10
  },
  reasonText:{
    color:colors.grey,
    fontFamily:fonts.light,
    fontSize:12,
  }
})