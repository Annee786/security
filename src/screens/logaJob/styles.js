import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  uploadBox:{
    height:180,
    width:'90%',
    backgroundColor:colors.white,
    borderRadius:10,
    borderWidth:2,
    borderColor:colors.blue,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderStyle:'dashed',
    marginTop:10
  },
  boxtext:{ 
    fontFamily:fonts.medium,
    fontSize:12,
    color:colors.greyDark
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
marginTop:20

  },
  upload:{
    fontFamily:fonts.semiBold,
    fontSize:12,
    color:colors.white
  },
  dateView:{
    flexDirection:'row',
  }
})