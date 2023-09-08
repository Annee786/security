import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  jobsView: {
    height: 230,
    padding: 10,
    width: '90%',
    borderColor: colors.shadow,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageView: {
    height: 42,
    width: 42,
    resizeMode: 'contain',
  
  },
  imageTextView: {
    flexDirection: 'row',
  },
  job: {
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: 14,
    paddingLeft: 10,
  },
  schedule: {
    color: colors.black,
    fontFamily: fonts.light,
    fontSize: 10,
    paddingLeft: 10,
  },
  charges: {
    color: colors.red,
    fontFamily: fonts.regular,
    fontSize: 14,
  },

  time: {
    color: colors.greyLight,
    fontFamily: fonts.light,
    fontSize: 10,
    paddingLeft:5
  },

  nameView: {
    flexDirection: 'column',
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    borderColor: colors.chatbox,
    backgroundColor: colors.chatbox,
    borderWidth: 0.5,
    marginTop: 10,
    alignSelf: 'center',
  },
  jobdescrbtion: {
    color: colors.black,
    fontFamily: fonts.light,
    fontSize: 12,
    padding: 5,
  },
  locationtext: {
    color: colors.greyLight,
    fontFamily: fonts.light,
    fontSize: 10,
    paddingLeft: 5,
    paddingTop: 5,
  },
  mapin: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginTop: 5,
  },
  startjobView:{
    height:45,
    width:'45%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.white,
    borderColor:colors.blue,
    borderWidth:1,
    borderRadius:23,
    alignSelf:'center'
  },
  start:{
    color: colors.blue,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  fordView: {
    height: 80,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    borderColor: colors.shadow,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    
  },
  jamesimage: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.black,
  },
  square: {
    height: 40,
    width: 40,
    borderColor: colors.lightBlue,
    backgroundColor: colors.lightBlue,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jamesrating: {
    flexDirection: 'column',
   
  },
  number: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.greyLight,
    paddingLeft: 5,
  },
  rate: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.greyLight,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
  },
  circle:{
    height:25,
    width:25,
    resizeMode:'contain'
  },
  trackstatus:{
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.greyLight,
    paddingHorizontal:20
  },
  cylinder:{
    flexDirection:'row'
  }

})