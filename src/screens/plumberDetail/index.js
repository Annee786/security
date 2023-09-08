import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';

const Category = [
  {
    title: 'Leaving Soon.',
    image: images.mappin,
    detail:
      'The plumber is preparing to leave their current location and will be on the way shortly',

    time: '8:45 a.m',
  },
  {
    title: 'On the Way',
    image: images.locatefixed,
    detail: "The plumber  is currently en route to the customer's location.",
    time: '8:50 a.m',
  },
  {
    title: 'Just Arrived',
    image: images.doorclosed,
    detail: "The plumber has reached the customer's address and is at door.",
    time: '9:05 a.m',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.trackView}>
      <View style={styles.mapcircle}>
        <Image style={styles.map} source={item.image}></Image>
      </View>
      <View style={styles.detailText}>
        <View style={styles.leavingDate}>
          <Text style={styles.leavingText}>{item.title}</Text>
          <Text style={styles.number}>{item.time}</Text>
        </View>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
    </View>
  );
};

const PlumberDetails = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Track your Plumberile" />
      <BreadCrum heading="Plumber Details" />
      <View style={styles.plumberView}>
        <Text style={styles.scheduleText}>Scheduled at 9:10 am</Text>
        <Text style={styles.schedule}>Your Plumber is 10 mins away.</Text>
        <View style={styles.nameView}>
          <Image style={styles.jamesimage} source={images.jamesSmith}></Image>
          <View style={styles.jamesrating}>
            <Text style={styles.name}>James Smith</Text>
            <View style={styles.view}>
              <Image style={styles.star} source={images.star}></Image>

              <Text style={styles.rate}>4.3</Text>
              <Text style={styles.number}>(450)</Text>
            </View>
          </View>
          <View style={styles.square}>
            <Image
              style={styles.imageView}
              source={images.message}></Image>
          </View>
          <View style={styles.square}>
            <Image style={styles.imageView} source={images.phone}></Image>
          </View>
        </View>
      </View>
      <BreadCrum heading="Tracking Info" />
      <FlatList renderItem={renderItem} data={Category} />
    </SafeAreaView>
  );
};

export default PlumberDetails;
