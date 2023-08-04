import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import MessageBox from '../../components/messageBox';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';

const PersonalInfo = ({navigation, onPress}) => {
  return (
  
      <SafeAreaView style={styles.personalinfoView}>
      <Header heading="Create a Profile" alarmNotification/>
      <StepCount/>
      <Input placeHolder="Name" />
      <Input placeHolder="Country" />
      <Input placeHolder="State"/>
      <Input placeHolder="City" />
      <MessageBox placeHolder="General information about you" />
      <Button  onPress={() => navigation.navigate('Skills')}  heading="Next" />
    </SafeAreaView>
  );
};

export default PersonalInfo;
