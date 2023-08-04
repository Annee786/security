import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  termsView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  addingText: {
    color: colors.lightblack,
    fontFamily: fonts.semiBold,
    fontSize: 16,
    alignSelf: 'center',
    paddingVertical: 20,
  },

  circleView: {
    height: 124,
    width: 124,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: colors.grey,
    borderRadius: 60,
    backgroundColor: colors.lightShade,
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 20,
  },
  imageView: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
});
