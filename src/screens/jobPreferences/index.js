import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import Cylinder from '../../components/cylinder';
const Jobs = [
  {
    text: 'Leaky Faucet',
    image: images.check,
  },
  {
    text: 'Clogged Drain',
    image: images.check,
  },
  {
    text: 'Running Toilet',
    image: images.check,
  },
  {
    text: 'Low Water Pressure',
    image: images.check,
  },
  {
    text: 'Dripping Pipes',
    image: images.check,
  },
  {
    text: 'Clogged Shower Drain',
    image: images.check,
  },
  {
    text: 'Sewer System Backup',
    image: images.check,
  },
  {
    text: 'Water Heater Leak',
    image: images.check,
  },
  {
    text: 'Frozen Pipes',
    image: images.check,
  },
  {
    text: 'Leaking Hose Bibb',
    image: images.check,
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.text}>{item.text}t</Text>
      <View style={styles.squarecheck}>

      <Image style={styles.imageView} source={item.image}></Image>
      </View>
    </View>
  );
};
const JobPreferences = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Job Preferences" />
      <BreadCrum heading="Select your job type" />
      <Text style={styles.customText}>
        Customize your plumbing experience by setting your preferences below.
      </Text>
      <FlatList renderItem={renderItem} data={Jobs} />
      <Cylinder heading="Filter" isBlue />
    </SafeAreaView>
  );
};

export default JobPreferences;
