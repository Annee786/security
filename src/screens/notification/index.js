import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import {FlatList} from 'react-native';

const messages = [
  {
    mainText: 'Plumber assigned.',
    text: 'A plumber has accepted your job.',
    sidetext: 'Now',
  },

  {
    mainText: 'Rate your Plumber',
    text: "Please rate your plumber's service.",
    sidetext: '20 mins',
  },

  {
    mainText: 'Job Completed.',
    text: 'Job successfully completed!',
    sidetext: '1 hour',
  },

  {
    mainText: 'ETA Update:',
    text: 'Plumber Alex Thompson will arrive at your location in approximately 30minutes.',
    sidetext: '16 hours',
  },

  {
    mainText: 'New Offer',
    text: 'Plumber Andrew Brown made a new offer for your job.Check it out!',
    sidetext: '2 days',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.notificationView}>
      <View style={styles.logoImage}>
        <Image style={styles.logo} source={images.plumberLogo}></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.subText}>{item.text}</Text>
      </View>
      <View style={styles.sidetextview}>
        <Text style={styles.sideText}>{item.sidetext}</Text>
      </View>
    </View>
  );
};

const Notification = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Notifications" />
      <ScrollView>
        <FlatList renderItem={renderItem} data={messages} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
