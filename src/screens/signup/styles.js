import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  signupView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  lineView: {
    flexDirection: 'row',
  },
  leftborder: {
    width: '30%',
    color: colors.lightgrey,
  },
  or: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightgrey,
  },
  container: {
    height: 50,
    width: '90%',
    borderColor: colors.jetblack,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    borderWidth:2,
    borderRadius:10,
    marginLeft:10
  },
  lineView: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  leftborder: {width: '35%', color: colors.grey, borderWidth:0.3},

  lineText: {
    fontSize: 12,
    fontFamily: fonts.light,
    color: colors.grey,
    paddingHorizontal: 20,
  },
  imagetextView: {
    flexDirection: 'row',
  
  
  },
  googleimage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',

  },
  continuetext: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.lightblack,
    paddingLeft:5
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.grey,
  },
  Text: {
    flexDirection: 'row',
    alignSelf:'center',
    marginTop:20
  },
  logintext: {
    color: colors.lightblack,
    fontFamily: fonts.medium,
    fontSize: 12,
  },
});
