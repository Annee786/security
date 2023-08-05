import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchiew: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 5,
    width: '75%',
    borderColor: colors.lightgrey,
    borderWidth: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imagesearch: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  textsearch: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.lightblack,
    padding: 5,
  },
  tabsView: {
    flexDirection: 'row',
  },
  filterbox: {
    height: 40,
    width: '15%',
    paddingHorizontal: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightgrey,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  filterimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  tubimage: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  findingText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
    alignSelf: 'center',
    paddingVertical: 30,
  },
  box: {
    height: 90,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  categories: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  imageView: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  categoryText: {
    color: colors.lightblack,
    fontFamily: fonts.regular,
    fontSize: 10,
    paddingVertical: 5,
  },
  Viewimage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  name: {
    color: colors.lightblack,
    fontFamily: fonts.semiBold,
    fontSize: 14,
  },
  title: {
    color: colors.lightblack,
    fontFamily: fonts.light,
    fontSize: 10,
  },
  place: {
    color: colors.lightblue,
    fontFamily: fonts.medium,
    fontSize: 10,
  },
  heartimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  nameView: {
    height: 70,
    width: '90%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.lightgrey,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textView: {
    flexDirection: 'column',
    padding: 10,
  },
  heartView: {
    justifyContent: 'flex-end',
  },
});
