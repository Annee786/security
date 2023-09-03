import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  circle: {
    height:300,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  check: {
    resizeMode: 'contain',
    height:'80%',
    width:150,
  },
  bookingView: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bookinText: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.white,
  },
  subText:{
paddingHorizontal:30,
alignItems:'center',
paddingVertical:20,
paddingBottom:50
  },
  text:{
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.white, 
  },
  thanku:{
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.white,  
  }
});
