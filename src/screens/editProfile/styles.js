import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  pictureView:{
    justifyContent:'center',
    alignItems:'center'
  },
  picture:{
    height:130,
    width:130,
    resizeMode:'contain'
  },
  camera:{
    height:20,
    width:20,
    resizeMode:'contain'
  },
  cameraView:{
    height:40,
    width:40,
    backgroundColor:colors.blue,
    borderRadius:20,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:colors.white,
  }

})