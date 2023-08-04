import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Tab from '../../components/tab';
import StepCount from '../../components/stepCount';
import SaveExitTab from '../../components/saveExitTab';
import Button from '../../components/button';
import AddMore from '../../components/addMore';

const jobsTitle = [
  {
    images: 'Right',
    title: 'Graphic Designer',
    images: 'downArrow',
  },
  {
    images: 'Right',
    title: 'Project Manager',
    images: 'downArrow',
  },
  {
    images: 'Right',
    title: 'Content Writer',
    images: 'downArrow',
  },
];

const Designations = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.designationView}>
      <Header heading="Start your business" alarmNotification />
      <StepCount />
      <View style={styles.tabView}>
        <Tab input="Team Roles" />
        <Tab input="Partnership Terms" />
      </View>
      {jobsTitle.map(item => {
        return (
          <View style={styles.jobtitleView}>
            <View style={styles.textView}>
              <Image style={styles.rightimage} source={item.images}></Image>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <Image style={styles.arrowimage} source={item.images}></Image>
          </View>
        );
      })}
     <AddMore/>
      <SaveExitTab heading="Save and Exit" />
      <Button
        onPress={() => navigation.navigate('GeneralTerms')}
        heading="Next"
      />
    </SafeAreaView>
  );
};

export default Designations;
