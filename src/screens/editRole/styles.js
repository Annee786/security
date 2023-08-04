import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    borderColor: colors.lightgrey,
    backgroundColor: colors.lightgrey,
    height: 250,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'flex-start',
    alignSelf:'center',
    paddingHorizontal:10,
    paddingVertical:10
  },
text: {
  color: colors.lightblack,
  fontSize: 14,
  fontFamily: fonts.regular,
},
tabsView:{
  flexDirection:'row',
 marginTop:20
},
})