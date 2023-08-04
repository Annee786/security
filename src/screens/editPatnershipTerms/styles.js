import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  termsTab:{
    height:50,
    width:'70%',
    alignItems:"center",
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:colors.cgreen,
    borderRadius:10,

  },
  termsText:{
    fontFamily:fonts.semiBold,
    fontSize:14,
    color:colors.white
  },
  container: {
    borderColor: colors.lightgrey,
    backgroundColor: colors.lightgrey,
    height: 160,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'flex-start',
    alignSelf:'center',
    paddingHorizontal:20,
    paddingVertical:10

  },
  input: {
    color: colors.grey,
    fontSize: 14,
    fontFamily: fonts.regular,

  },


})