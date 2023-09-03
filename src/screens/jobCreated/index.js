import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';

const JobCreated = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Job Created" />
      <View style={styles.image}>
        <Image style={styles.imageView} source={images.fixingWork}></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.great}>Great !</Text>
        <Text style={styles.subtext}>Job created successfully.</Text>
        <Text style={styles.subtext}>Now, wait for plumbers to accept your offer</Text>
      </View>
    </SafeAreaView>
  );
};

export default JobCreated;
