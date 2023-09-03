import React from 'react';
import {View, TouchableOpacity,Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import Cylinder from '../../components/cylinder';
import {FlatList} from 'react-native';

const Category = [
  {
    title: 'Tap & Basin Replacement',
    timings: '19/7/23 | 10:30 A.M ',
    detail:
      'Need tap replacement; leaking and causing low water pressure in the kitchen sink',
    dollars: '$ 200',
    image: images.tapFixing,
  },
  {
    title: 'Low Water Pressure',
    timings: '04/7/23 | 12:10 A.M ',
    detail:
      'Leaky faucet in the kitchen; water flow is inconsistent and needs repair.',
    dollars: '$ 420',
    image: images.lowWaterPressure,
  },

  {
    title: 'Bathroom Sink Clogged',
    timings: '19/7/23 | 10:30 A.M ',
    detail:
      'Bathroom sink clogged, water not draining properly, need immediate assistance.',
    dollars: '330$',
    image: images.sinkClogged,
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.jobsView}>
      <View style={styles.imageTextView}>
        <Image style={styles.imageView} source={item.image}></Image>
        <View style={styles.nameView}>
          <Text style={styles.job}>{item.title}</Text>
          <View style={styles.starView}>
            <Text style={styles.schedule}>Scheduled at </Text>
            <Text style={styles.time}>{item.timings}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.jobdescrbtion}>{item.detail}</Text>
      <View style={styles.starView}>
        <Image style={styles.mapin} source={images.mappin}></Image>
        <Text style={styles.locationtext}>Salt Lake City, USA</Text>
      </View>
      <View style={styles.starView}>
        <Image style={styles.mapin} source={images.dollar}></Image>
        <Text style={styles.locationtext}>{item.dollars}</Text>
      </View>
    </View>
  );
};
const JobsPending = ({onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="My Jobs" />
      <View style={styles.pendingView}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.inputText}>Pending</Text>
      </TouchableOpacity>
      <Text style={styles.completetext}>Completed</Text>

      </View>
      <FlatList renderItem={renderItem} data={Category} />
    </SafeAreaView>
  );
};

export default JobsPending;
