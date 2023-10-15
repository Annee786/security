import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  venueView: {
    width: '90%',
    flexDirection: 'row',
    height: 70,
    paddingHorizontal: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
  },

  venueimages: {
    height: 38,
    width: 38,
    resizeMode: 'contain',
  },
  venuname: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.blakishgrey,
    paddingLeft: 10,
  },

  id: {
    fontSize: 11,
    fontFamily: fonts.light,
    color: colors.blakishgrey,
  },

  amount: {
    fontSize: 11,
    fontFamily: fonts.regular,
    color: colors.charge,
  },
});
