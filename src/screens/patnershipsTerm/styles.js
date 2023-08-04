import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  shadowView: {
    borderBottomColor: colors.lightgrey,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },


  overViewTab: {
    flexDirection: 'row',
    height: 50,
    width: '110%',
    borderColor: colors.lightblue,
    backgroundColor: colors.lightblue,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  overView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  overViewText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.white,
    padding: 15,
  },

  termsText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.lightblack,
    paddingLeft: 10,
  },
  termsView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,height:150,
    width:'90%',
    paddingVertical: 15,
  },
  circleCount: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightblue,
    borderRadius: 12,
  },
  counting: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.white,
  },
  lineView: {
    height: 1,
    width: '90%',
    backgroundColor: colors.lineColor,
    alignSelf: 'center',
  },
  tabView:{
    flexDirection:'row',
    paddingVertical:20
  },
  update:{
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
  updateTab:{
    height: 50,
    width:'40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightblue,
    borderRadius: 10,
  alignSelf:"flex-end",
  marginRight:10,
  marginTop:10

  },
});
