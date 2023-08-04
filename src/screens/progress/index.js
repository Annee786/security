import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Header from '../../components/header';
import Input from '../../components/input';
import MessageBox from '../../components/messageBox';
import SaveExitTab from '../../components/saveExitTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';
const Progress = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.milestoneView}>
      <Header heading="Start your business"alarmNotification />
      <StepCount/>
      <Input placeHolder="Milestone Title" />
      <MessageBox placeHolder="Description" describeMore />
      <View style={styles.dateTab}>
        <Text style={styles.dateText}>Due Date</Text>
        <Image style={styles.duedateimage} source={images.duedate}></Image>
      </View>
<Text style={styles.progresText}>Progress</Text>
<View style={styles.progressView}>
  <View style={styles.progress}></View>
</View>
<Text style={styles.percents}>35%</Text>
      <SaveExitTab heading="Save and Exit" />
      <Button  onPress={() => navigation.navigate('PdfUpload')} heading="Next" />
    </SafeAreaView>
  );
};

export default Progress;
