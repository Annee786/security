import React from 'react';
import {View, Image, Text, ScrollView, ImageBackground} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import Button from '../../components/button';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import Cylinder from '../../components/cylinder';

const SetLocation = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Job Preferences" />
      <ScrollView>
      <BreadCrum heading="Set Service Area" />
      <Text style={styles.customText}>
        Select your service area's radius to connect with nearby plumbing jobs.
      </Text>
      <Input placeHolder="Enter your Area" locate />
      <BreadCrum heading="Distance Radius" />
      <View style={styles.miles11}>
        <Text style={styles.milestext11}>11 Miles</Text>
      </View>

      <View style={styles.distanceView}>
        <View style={styles.distance}>
          <View style={styles.circle}></View>
        </View>
      </View>
      <View style={styles.miles}>
        <Text style={styles.milesText}>5 Miles</Text>
        <Text style={styles.milesText}>100 Miles</Text>
      </View>

<View style={styles.map}>
    <ImageBackground style={styles.mapimage}source={images.map}></ImageBackground>
    <Image style={styles.mapin}source={images.mappin}></Image>
</View>
<Cylinder heading="Set Location" isBlue/>
    </ScrollView>
    </SafeAreaView>
  );
};

export default SetLocation;
