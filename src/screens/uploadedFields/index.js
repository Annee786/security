import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import TimeTab from '../../components/timeTab';
import Button from '../../components/button';

const UploadedFields = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Log a Job"bell />
      <ScrollView>
        <BreadCrum heading="Upload Media" />
        <View style={styles.uploadBox}>
          <Text style={styles.boxtext}>Upload your Photos or Videos</Text>
          <Text style={styles.boxtext}>related to plumbing issues.</Text>
          <View style={styles.tapView}>
            <Image style={styles.tapimage} source={images.tap}></Image>
            <Image style={styles.tapimage} source={images.flexiTap}></Image>
            <Image style={styles.tapimage} source={images.tapFixing}></Image>
          </View>
          <View style={styles.tab}>
            <Image style={styles.plusimage} source={images.pluscircle}></Image>
            <Text style={styles.upload}>Add More</Text>
          </View>
        </View>
        <Input
          tabHeader="Job Title"
          placeHolder="Tap Repairing"
          blackHeader
          isArrowdown
        />
        <Input
          tabHeader="Job Description"
          placeHolder="Bring new water taps as well as pipes for the ba...  "
          blackHeader
        />
        <Input
          tabHeader="Location or Address"
          placeHolder="ST # 04 , Twin Tower, US"
          blackHeader
          mapin
        />
        <View style={styles.dateView}>
          <TimeTab tabHeader="Date" istime placeHolder="3/7/2023" />
          <TimeTab tabHeader="Time" isclock placeHolder="9:00 am" />
        </View>

        <Button  onPress={() => navigation.navigate('LocationMap')} heading="Submit" isgrey />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadedFields;
