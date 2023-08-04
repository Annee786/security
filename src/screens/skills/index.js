import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';


const Skills = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.skillsView}>
      <Header heading="Create a Profile" alarmNotification/>
      <StepCount/>
      <Input placeHolder="Your role in this Business" />
      <Input placeHolder="Total hours you’ll spend
       a week on this business"showTime/>
      <Input placeHolder="Your job title" />
      <MessageBox placeHolder="Description of your experience, development 
& goals for this business"/>

      <Button  onPress={() => navigation.navigate('ProfilePicture')}  heading="Next" />
    </SafeAreaView>
  );
};

export default Skills;
