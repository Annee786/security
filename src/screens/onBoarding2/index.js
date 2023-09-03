import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import Button from '../../components/button';

const OnBoarding2 = ({navigation}) => {
  return (
    <View style={styles.pageView}>
      <View style={styles.imageView}>
        <Image
          style={styles.removeimage}
          source={images.plumbingService}></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.mainText}>Reliable Plumbing Services</Text>
        <Text style={styles.mainText}>at Your Fingertips</Text>
      </View>

      <View style={styles.subText}>
        <Text style={styles.text}>Skilled plumbers for </Text>
        <Text style={styles.text}>
          worry-free solutions. Sit back and relax!
        </Text>
      </View>
      <View style={styles.moreView}>
        <Image style={styles.moreimage} source={images.more}></Image>
      </View>

      <Button  onPress={() => navigation.navigate('LoginUnfill')}  heading="Continue as User" isBlue />
      <Button   onPress={() => navigation.navigate('LoginUnfill')} heading="Register as a Plumber" isWhite />
    </View>
  );
};

export default OnBoarding2;
