import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  background: {
    height: 240,

    resizeMode: 'contain',
  },
  paymentbox: {
    height: 260,
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
marginBottom:20  },


  securityText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.black,
  },
  barone: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.blakishgrey,
  },
  security: {
    height: 78,
    width: 78,
    resizeMode: 'contain',
  },

  circle: {
    height: 92,
    width: 92,
    backgroundColor: colors.cylinder,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column:{
flexDirection:'column',
alignItems:'center',
margin:10,
paddingTop:15,
borderRightColor:colors.border,
borderRightWidth:1,

  },
  mapin:{
    height: 16,
    width: 16,
    resizeMode: 'contain',
    tintColor:colors.blue
  },
  location:{
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.black,
    paddingRight:10
  },
  text:{
    fontFamily: fonts.light,
    fontSize: 9,
    color: colors.cylinder,
  },
  description:{
    fontFamily: fonts.light,
    fontSize: 13,
    color: colors.blakishgrey,
    paddingHorizontal:20,
    lineHeight:22
  },
  map:{
    height: 110,
    width: '95%',
    resizeMode: 'contain',
    alignSelf:'center'
  },
  row:{
    flexDirection:'row'
  },
  row:{
    flexDirection:'row'
  }
});
