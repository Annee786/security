import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';

const ProfilePicture = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.profilepictureView}>
      <Header heading="Create a Profile" alarmNotification />
      <StepCount/>
      <View style={styles.circleView}>
        <Image style={styles.imageView} source={images.camera}></Image>
      </View>
      <Button onPress={() => navigation.navigate('MyBusiness')}  heading="Next" />
    </SafeAreaView>
  );
};

export default ProfilePicture;
