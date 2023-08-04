import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  planView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  planBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height:60,
    width:'90%',
    borderWidth:1,
    borderColor:colors.grey,
    backgroundColor:colors.white,
    borderRadius:10,
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignSelf:'center',
    marginTop:20



  },
  pdfimage: {height: 20, width: 20, resizeMode: 'contain'},



  planText: {
    fontFamily:fonts.medium,
    fontSize:16,
    color:colors.lightblack,
    paddingLeft:5
  },
});
