import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  businessRolesView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  subHeading: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.jetblack,
    alignSelf: 'center',
    marginTop: 20,
  },
  dottedBox: {
    height: 60,
    width: '90%',
    borderColor: colors.lightblack,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  skillsButton: {
    height: 60,
    width: '90%',
    borderColor: colors.lightgrey,
    backgroundColor: colors.lightgrey,
    marginLeft: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  designbox: {
    height: 25,
    width: '30%',
    backgroundColor: colors.cgreen,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 5,
  },
  rolesView:{flexDirection:'row',
paddingHorizontal:20},

  designText: {
    color: colors.lightblack,
    fontFamily: fonts.light,
    fontSize: 10,
  },
  imageView:{
    height:20,
    width:20,
    resizeMode:'contain'
  },
  searchTextView: {
    flexDirection: 'row',
    alignContent: 'center',
    borderBottomColor: colors.lightgrey,
    height: 60,
    width: '90%',
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  tabsView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  lookingtext: {
    fontSize: 12,
    fontFamily: fonts.light,
    color: colors.lightblack,
  },
  dotimageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  dottedBox: {
    height: 60,
    width: '90%',
    borderColor: colors.lightblack,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  addmoreText:{
    fontFamily:fonts.regular,
    fontSize:12,
    color:colors.lightblack
  }
});
