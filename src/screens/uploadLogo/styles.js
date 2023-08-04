import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  uploadView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  text: {
    color: colors.lightblack,
    fontFamily: fonts.semiBold,
    fontSize: 16,
    paddingHorizontal: 10,
  },
 
  businessBox: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  
  circleView:{
    height:124,
    width:124,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
  borderColor:colors.grey,
  borderRadius:60,
  backgroundColor:colors.lightShade,
  borderWidth:1,
  marginTop:30,
  marginBottom:20


  },
  imageView:{
    height:35,
    width:35,
    resizeMode:'contain'
  },
  uploadBox: {
    height: 50,
    width: '50%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
    borderColor: colors.lightgrey,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection:'row',
  },
  uploadimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  uploadText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.jetblack,
  },
});
