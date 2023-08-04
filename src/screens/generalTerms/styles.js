import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  termsView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
 
  textView: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.lightblack,
    marginTop: 20,
    paddingLeft: 20,
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.darkGrey,
    paddingLeft: 20,
  },
  tabView: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  termsTab:{
    height:40,
    width:'70%',
    borderColor:colors.cgreen,
    backgroundColor:colors.cgreen,
    borderWidth:1,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
marginTop:20
  },
  termsText:{
fontFamily:fonts.light,
fontSize:14,
color:colors.lightgrey
  }
});
