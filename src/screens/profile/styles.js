import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop:20,
    paddingBottom:20
  },
  pic: {
    height: 90,
    width: '30%',
    resizeMode: 'contain',
  },

  name: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.black,
    paddingLeft: 20,
  },
  emailId: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.greyLight,
    paddingLeft: 20,
  },
  nameView: {
    flexDirection: 'column',
  },
  editTab: {
    height: 35,
    width: '65%',
    borderColor: colors.blue,
    backgroundColor: colors.blue,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 20,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.white,
  },
  profileView:{
    flexDirection: 'row',
    height:50,
    width:'90%',
    alignSelf:'center',
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:'space-between',
  },
  imageView:{
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  jobsView:{
    height:45,
    width:'80%',
    justifyContent:'center'
  },

  jobs:{
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.black,
    paddingLeft:5,
  },
  text:{
   
  },
  
    arrow:{
      height: 20,
      width: 20,
      resizeMode: 'contain',
    }
});
