import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import HomeScreenHeader from '../../components/homeScreenHeader';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import Cylinder from '../../components/cylinder';
import Input from '../../components/input';

const JobDetails = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Job Details" />
      <ScrollView>
              <Text style={styles.jobtitle}>Job Title</Text>
      <View style={styles.jobtitleView}>
        <View style={styles.text}>
          <Text style={styles.title}>Bath & Shower Fitting</Text>
        </View>
        <View style={styles.offerBox}>
          <Text style={styles.ratetext}>Offer Rates</Text>
        </View>
      </View>
      <View style={styles.bathView}>
      <Image style={styles.image} source={images.bathshower}></Image>
        <Image style={styles.image} source={images.bathroom}></Image>
      </View>
     

    <View style={styles.dateView}>
<Text style={styles.datetext}>Date</Text>
<Text style={styles.datetext}>Time</Text>
<Text style={styles.datetext}>Location</Text>
    </View>

    <View style={styles.dateView}>
<Text style={styles.timetext}>5/8/2023</Text>
<Text style={styles.timetext}>10:20 a.m</Text>
<Text style={styles.timetext}>Twin Tower, USA</Text>
    </View>
      <BreadCrum heading="Job Description" />
     
        <Text style={styles.Text}>
          Urgent bathroom and shower fitting problem: severe leakage issues with
          a constantly dripping showerhead and a leaking faucet at the base.
          Immediate intervention needed to conserve water and prevent further
          damage. Skilled plumber required for resolution.
        </Text>
      <BreadCrum heading="View Location" />
<Input placeHolder="ST # 04 , Twin Tower, US" locate />
<View style={styles.cylinder}>
    <Cylinder heading="Decline"isred/>
    <Cylinder heading="Accept"isBlue/>

</View>
</ScrollView>

    </SafeAreaView>
  );
};

export default JobDetails;
