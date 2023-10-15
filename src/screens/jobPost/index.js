import React from 'react';
import {View, Text, ScrollView,Image,ImageBackground} from 'react-native';
import styles from './styles';
import {colors, images} from '../../utils';
import Button from '../../components/button';
import JobHeader from '../../components/jobHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

import Tab from '../../components/Tab';
import HeaderTab from '../../components/headerTab';

const JobPost = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Post Job" />
      <View style={styles.addingView}>
  <View style={styles.circle}>
    <ImageBackground style={styles.camera}source={images.Camera}></ImageBackground>
  </View>
  <Text style={styles.addtext}>Add Photo / logo</Text>
</View>
      <HeaderTab
        tabHeader="Venue Name"
        placeHolder="The Cat House"
      />
      <HeaderTab
        tabHeader="Job Location"
        placeHolder="St.12, Main City Road, New York"
      />
      <HeaderTab
        tabHeader="Job Description"
        placeHolder="Lorem ipsum is the dummy text used for typesetting 
        and printing."
      />
      <View style={styles.nameView}>
        <Tab tabHeader="Date" placeHolder="30/08/2023" />
        <Tab tabHeader="Time" placeHolder="10:30 am - 6:00 pm"/>
      </View>
      <View style={styles.nameView}>
        <Tab tabHeader="Rate per week / hour" placeHolder="$ 56.00" />
        <Tab tabHeader="Gender (if required)" placeHolder="Male"/>
      </View>
   <View style={styles.saveView}>
   <Image style={styles.tick}source={images.checksquare}></Image>
   <Text style={styles.savetext}>Save this Venue info</Text>
   </View>
     
      <Button  onPress={() => navigation.navigate('VenueList')} heading="Confirm" />
    </SafeAreaView>
  );
};

export default JobPost;
