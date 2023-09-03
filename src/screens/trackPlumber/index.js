import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';

const TrackPlumber = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Profile" />
      </SafeAreaView>
  );
};

export default TrackPlumber;