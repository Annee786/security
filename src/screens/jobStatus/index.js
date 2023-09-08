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

const JobStatus = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Job Status" />
      <ScrollView>
        <BreadCrum heading="Job Details" />
        <View style={styles.jobsView}>
          <View style={styles.imageTextView}>
            <Image
              style={styles.imageView}
              source={images.lowWaterPressure}></Image>
            <View style={styles.nameView}>
              <Text style={styles.job}>Bath & Shower Fitting </Text>
              <View style={styles.starView}>
                <Text style={styles.schedule}>Scheduled at </Text>
                <Text style={styles.time}>05/8/23 | 12:10 A.M </Text>
              </View>
            </View>
          </View>
          <View style={styles.line}></View>
          <Text style={styles.jobdescrbtion}>
            Urgent bathroom and shower fitting problem: severe leakage issues
            with a constantly dripping showerh........
          </Text>
          <View style={styles.starView}>
            <Image style={styles.mapin} source={images.mappin}></Image>
            <Text style={styles.locationtext}>Salt Lake City, USA</Text>
          </View>
          <View style={styles.starView}>
            <Image style={styles.mapin} source={images.dollar}></Image>
            <Text style={styles.locationtext}>$ 350</Text>
          </View>
          <View style={styles.startjobView}>
            <Text style={styles.start}>Start Job</Text>
          </View>
        </View>
        <BreadCrum heading="Customer Details" />
        <View style={styles.fordView}>
          <Image style={styles.jamesimage} source={images.ford}></Image>
          <View style={styles.jamesrating}>
            <Text style={styles.name}>Ford Clark</Text>
              <Text style={styles.rate}>Fordclark@gmail.com</Text>
          </View>
          <View style={styles.square}>
            <Image style={styles.circle} source={images.messagecircle}></Image>
          </View>
          <View style={styles.square}>
            <Image style={styles.circle} source={images.phone}></Image>
          </View>
        </View>
        <BreadCrum heading="Tell your tracking status" />
<Text style={styles.trackstatus}>Select one by one according to your current status , it will 
directly update to customer.</Text>
<View style={styles.cylinder}>
<Cylinder heading="Leaving Soon." mapinblue/>
<Cylinder heading="On the Way" locateingrey/>
</View>
<Cylinder heading="Just Arrived" doorclosedingrey/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default JobStatus;
