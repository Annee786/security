import React from 'react';
import {View, Text, Image, } from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import JobHeader from '../../components/jobHeader';
import Tab from '../../components/Tab';
import HeaderTab from '../../components/headerTab';
const Venue = [
  {
    image: images.security,
    name: 'Barron LLC',
    amount: '$ 38.00',
  },
  {
    image: images.cathouse,
    name: 'Falcon Warehouse',
    amount: '$ 138.00',
  },
  {
    image: images.security,
    name: 'Barron LLC',
    amount: '$ 38.00',
  },
  {
    image: images.cathouse,
    name: 'Falcon Warehouse',
    amount: '$ 138.00',
  },
  {
    image: images.security,
    name: 'Barron LLC',
    amount: '$ 38.00',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.venueView}>
      <View style={styles.row}>
        <Image style={styles.venueimages} source={item.image}></Image>
        <Text style={styles.venuname}>{item.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.id}>Amount :</Text>

        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );
};

const MyEarnings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="My Earnings" />
      <BreadCrum heading="Filter Date" />
      <View style={styles.row}>
        <Tab
          tabHeader="From Date"
          placeHolder="12/8/23"
          image={images.calenderdays}
        />
        <Tab
          tabHeader="To Date"
          placeHolder="12/8/23"
          image={images.calenderdays}
        />
      </View>
      <BreadCrum heading="Payment History" />
      <FlatList renderItem={renderItem} data={Venue} />
    </SafeAreaView>
  );
};

export default MyEarnings;
