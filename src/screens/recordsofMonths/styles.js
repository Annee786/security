import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  monthView:{
    height:50,
    width:'35%',
    backgroundColor:colors.lightblue,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.lightblue,
    borderRadius:10,
    marginLeft:20
  },
  months:{
    fontFamily:fonts.bold,
    fontSize:18,
    color:colors.white
  },
  contributionTab:{
    height:60,
    width:'70%',
    backgroundColor:colors.termsTab,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.termsTab,
    borderRadius:15,
    alignSelf:'center',
    marginTop:15
  },
  textView:{
    fontFamily:fonts.bold,
    fontSize:16,
    color:colors.white
  }

})