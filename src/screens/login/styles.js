import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  loginView: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  arrowimage:{
    height:20,
    width:20
  },
  backView:{
    height:35,
    width:35,
    backgroundColor:colors.lightblue,
    borderColor:colors.lightblue,
    borderWidth:1,
borderRadius:10,
justifyContent:'center',
alignItems:'center',
margin:10
  },
  imagesView:{
    flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',

  },
  halfcircle:{
    height:120,
    width:120,
    resizeMode:'contain'
  },
  circles:{

  },



  accountButton: {
    backgroundColor: colors.green,
    height: 60,
    width: '90%',
   marginBottom:80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',marginTop:80
  },
  creatngacountText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  lineView: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  leftborder: {width: '35%',borderColor:colors.lightgrey,borderWidth:1},

  lineText: {
    fontSize: 12,
    fontFamily: fonts.light,
    color: colors.grey,
    paddingHorizontal: 10,
  },
  forgetText: {
    color: colors.lightblack,
    marginTop: 20,
    alignSelf: 'center',
    fontFamily: fonts.medium,
    fontSize: 12,
  },
});
