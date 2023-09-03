import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  textView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },

  intro: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.black,
  },
  plan: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.blue,
    paddingVertical: 5,
  },
  new: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.greyLight,
    paddingVertical: 5,
  },
  serviceBox: {
    height: 150,
    width: '45%',
    backgroundColor: colors.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  serviceText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.cylinder,
  },
  chargesText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.cylinder,
  },
  chargesText1: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.cylinder,
    paddingVertical: 10,
  },
  line: {
    height: 1,
    width: '45%',
    backgroundColor: colors.seagreen,
    borderColor: colors.seagreen,
    marginVertical: 5,
    borderWidth: 1,
  },
  chooseSubText: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.blue,
    paddingLeft: 20,
    padding: 20,
  },
  features: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.black,
    paddingLeft: 20,
  },
  lineView: {
    height: 1,
    width: '90%',
    backgroundColor: colors.black,
    borderColor: colors.black,
    marginVertical: 5,
    borderWidth: 1,
    alignSelf: 'center',
  },
  annualView: {
    flexDirection: 'column',
    paddingVertical: 10,
    height: 120,
    width: '100%',
    paddingHorizontal:10,
    

  },
  annualtext: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.black,
    padding:10,
  },
  tickView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:10,
  alignItems:'center'


  },
  check: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  NA: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.grey,
  },
  chooseTab:{
    height: 25,
marginLeft:40,
    width: '20%',
    backgroundColor: colors.seagreen,
    borderColor: colors.seagreen,
borderRadius:15,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  chooseText:{
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.white,
  },

});
