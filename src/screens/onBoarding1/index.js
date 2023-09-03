import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import Button from '../../components/button';

const OnBoarding1 = ({navigation}) => {
  return (
    <View style={styles.pageView}>
      <View style={styles.imageView}>
        <Image style={styles.removeimage} source={images.imageRemove}></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.mainText}>Join our team</Text>
        <Text style={styles.mainText}> of skilled plumbers!</Text>
      </View>

      <View style={styles.subText}>
        <Text style={styles.text}>Unleash Your Plumbing</Text>
        <Text style={styles.text}>Expertise to Serve Valued Customers.</Text>
      </View>
      <View style={styles.moreView}>
        <Image style={styles.moreimage} source={images.more}></Image>
      </View>

      <Button  onPress={() => navigation.navigate('OnBoarding2')} heading="Continue as User" isBlue />
      <Button heading="Register as a Plumber" isWhite />
    </View>
  );
};

export default OnBoarding1;
