import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  background: {
    height: 240,
    width: 390,
    resizeMode: 'contain',
    paddingHorizontal: 20,
  },
  paymentbox: {
    height:130,
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',

  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    margin: 5,
    height: 70,
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
  },
  company: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.blakishgrey,
    paddingLeft: 10,
  },
  charges: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.blue,
  },

  right: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  imagetext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  total:{
    fontFamily: fonts.ExtraBold,
    fontSize: 24,
    color: colors.blue,
  },
  totalearn:{
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.grey,

  },
  diane:{
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  dianename:{
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.blakishgrey,
    paddingLeft:10
  },
  id:{
    fontFamily: fonts.light,
    fontSize: 8,
    color: colors.blakishgrey,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between' ,
  borderTopColor:colors.border,
  borderTopWidth:1,
  height:50,
  width:'90%',
  marginTop:10
  },

});
