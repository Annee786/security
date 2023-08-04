import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  milestoneTab: {
    height: 80,
    width: '95%',
    borderColor: colors.shadowBox,
    backgroundColor: colors.shadowBox,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  tabView:{
    flexDirection:'row'
  },

  percent: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:10
  },
  subText: {
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.lightblack
  },
  mainText: {
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.jetblack
  },
  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    margin:10
  },
  textView: {
    flexDirection: 'column',
    margin: 10,
  },

  dateView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  
  },
  dateimage:{
    height:10,
    width:10,
    resizeMode:'contain',

  },
  dateText:{
    fontFamily:fonts.light,
    fontSize:10,
    padding:5,
    color:colors.dateColor
  }
});
