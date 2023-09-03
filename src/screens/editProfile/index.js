import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import Button from '../../components/button';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Edit Profile" />
      <View style={styles.pictureView}>
        <Image style={styles.picture} source={images.mariumKhalid}></Image>
        <View style={styles.cameraView}>
          <Image style={styles.camera} source={images.camera}></Image>
        </View>
      </View>
      <Input blackHeader tabHeader="Full Name"placeHolder="Marium Khalid" isUser/>
      <Input blackHeader tabHeader="Email address"placeHolder="mariumkhalid81@gmail.com" isEmail/>
      <Input blackHeader tabHeader="Phone Number"placeHolder="0312-12345678" isPhone/>
      <Input blackHeader tabHeader="Password"placeHolder="******" isEye/>
      <Button  onPress={() => navigation.navigate('Subscription')}  blackHeader heading="Save Changes" isBlue/>

    </SafeAreaView>
  );
};

export default EditProfile;
