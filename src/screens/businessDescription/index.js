import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';
import SaveExitTab from '../../components/saveExitTab';
import Tab from '../../components/tab';

const BusinessDescription = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.personalinfoView}>
      <ScrollView>
        <Header heading="Start your business" alarmNotification />
        <StepCount/>
        <Text style={styles.text}>
        Leave boxes empty that don’t apply to you
Making adjustments later is possible even after publishing
        </Text>
        <Input placeHolder="Business Name" />
        <MessageBox placeHolder="Description" describeMore />
        <MessageBox placeHolder="Market Research" describeMore />
        <MessageBox placeHolder="Competition" describeMore />
        <MessageBox placeHolder="Additional Details" describeMore />
        <Input placeHolder="Category" showArrowButton />
        <Input placeHolder="Location" />
        <Input placeHolder="Budget" describeMore />
        <Input placeHolder="Stage" showArrowUp />
<Text style={styles.subText}>Business type</Text>
<View style={styles.tabView}>
  <Tab input="In Person"/>
  <Tab input="Online"/>
</View>
        <SaveExitTab heading="Save and Exit"/>
        <Button onPress={() => navigation.navigate('UploadLogo')} heading="Next" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessDescription;
