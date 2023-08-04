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
    height: 60,
    width: '90%',
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
  },
  pdfimage: {height: 20, width: 20, resizeMode: 'contain'},
  guideText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightShade,
paddingHorizontal:20
  },
  planText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.lightblack,
    paddingLeft: 5,
  },
  selectTab: {
    height: 50,
    width: '35%',
    borderColor: colors.lightgrey,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
  },
  selectText:{
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.grey,
    padding:5
  },
  publishText:{
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.lightShade,
    alignSelf:'center',
    marginTop:80
  },
  UploadBox:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '90%',
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20, 
    justifyContent:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
  },
  uploadText:{
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.lightblack,
    padding:5
  },
  web:{
    color:colors.lightShade,
    fontFamily:fonts.regular,
    fontSize:12,
    paddingHorizontal:20,


  }
});
