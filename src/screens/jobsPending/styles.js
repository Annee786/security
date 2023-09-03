import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  jobsView: {
    height: 160,
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
    fontSize: 12,
    paddingLeft: 10,
  },
  charges: {
    color: colors.red,
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  starimage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  time: {
    color: colors.greyLight,
    fontFamily: fonts.light,
    fontSize: 12,
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
  container: {
    backgroundColor: colors.blue,
    height: 45,
    width: '50%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10,
    
  },
  inputText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  pendingView:{
    height:50,
    width:'90%',
    borderColor:colors.skylight,
    backgroundColor:colors.skylight,
    borderRadius:20,
    alignSelf:'center',
    marginTop:10,
    flexDirection:'row',
    alignItems:'center'
  },
  completetext:{
    color: colors.blue,
    fontSize: 14,
    fontFamily: fonts.medium,
    paddingLeft:25
  }
});
