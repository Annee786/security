import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  logoView: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
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
  logoimage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.lightblack,
    padding: 10,
  },
  attachmentimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  techText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightblack,
  },
  imageView: {
    height: 80,
    width: '90%',
    borderColor: colors.yellow,
    backgroundColor: colors.yellow,
    borderWidth: 1,
    borderRadius: 10,
  },
  imagegroup: {
    height: 220,
    width: '100%',
    resizeMode: 'contain',
  },
  imageStyling: {
    justifyContent: 'center',
  },
  tabView: {flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20},
  overViewTab: {
    flexDirection: 'row',
    height: 50,
    width: '110%',
    borderColor: colors.lightblue,
    backgroundColor: colors.lightblue,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
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
  OverView: {
    height: 50,
    width: '100%',
    borderColor: colors.lightblue,
    backgroundColor: colors.lightblue,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.white,
    padding: 15,
  },
  logo: {flexDirection: 'column'},
});
