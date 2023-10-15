import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  pastjob: {
    color: colors.cylinder,
    fontFamily: fonts.medium,
    fontSize: 14,
    textAlign:'center',
    paddingBottom:10
  },
  pastView: {
    width:'50%',
    borderBottomColor:colors.cylinder,
    borderBottomWidth:3,
  
  },
  activeView:{
    width:'50%',
    borderBottomColor:colors.searchtab,
    borderBottomWidth:3
  },
  lineView: {
    borderWidth: 1,
    width: '90%',
    borderColor: colors.searchtab,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: colors.searchtab,
  },

  jobsView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 8,
    paddingBottom: 10,
  },
  venue: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  cathouse: {
    height: 38,
    width: 38,
    resizeMode: 'contain',
  },
  nameView: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.lightblack,
    margin: 8,
  },
  circle: {
    height: 32,
    width: 32,
    backgroundColor: colors.cylinder,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  imageview: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  imagename: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateimage: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  timetext: {
    fontFamily: fonts.extraLight,
    fontSize: 11,
    color: colors.lightblack,
    margin: 5,
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  imageandname: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  activejob:{
    color: colors.grey,
    fontFamily: fonts.medium,
    fontSize: 14,
    textAlign:'center',
    paddingBottom:10
  }
});
