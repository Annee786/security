import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  jobView: {
    height: 50,
    width: 50,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  jobdetail: {
    color: colors.blue,
    fontFamily: fonts.regular,
    fontSize: 10,
    paddingHorizontal: 10,
    textAlign:'center',
    lineHeight:18
  },
  imageView: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  accountsView: {
    borderColor: colors.border,
    width: '90%',
    height: 60,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  nameview: {
    alignSelf: 'center',
    padding: 10,
  },
  userimage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  username: {
    color: colors.lightblack,
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  time: {
    color: colors.lightgrey,
    fontFamily: fonts.light,
    fontSize: 9,
  },
  detailView: {
    height: 30,
    width: 80,
    backgroundColor: colors.cylinder,
    borderColor: colors.cylinder,
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  detail: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 9,
  },
  add: {
    height: 50,
    width: '50%',
    borderColor: colors.blue,
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  newpost: {
    color: colors.blue,
    fontFamily: fonts.medium,
    fontSize: 14,
    paddingLeft: 5,
  },
  plusimage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  userimageView: {
    flexDirection: 'row',
  },
  userView: {
    height: '100%',
    width: 70,
    alignItems: 'center',
  },
});
