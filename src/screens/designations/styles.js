import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  designationView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  tabView: {
    flexDirection: 'row',
    paddingVertical: 20,
  },

  jobtitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '90%',
    backgroundColor: colors.white,
    borderBottomColor: colors.grey,
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal:10
  },
  rightimage:{ height:20,
    width:20,
    resizeMode:'contain'},
  titleText:{
    fontFamily:fonts.semiBold,
    fontSize:14,
    color:colors.lightblack,
    paddingLeft:10
  },
  arrowimage:{
  height:20,
width:20,
resizeMode:'contain'},
textView:{
    justifyContent:'space-between'
},

});
