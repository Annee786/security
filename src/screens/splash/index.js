import React from 'react';
import {View,Image} from 'react-native';
import styles from './styles';
import { images } from '../../utils';

const Splash = ({}) => {
  return (
    <View style={styles.splashView}>
<Image style={styles.logoView}source={images.nabSecurity}></Image>   
 </View>
  );
};

export default Splash;
