import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import JobHeader from '../../components/jobHeader';

const OverView = [
  {
    data: 'Full Name',
    ans: 'Robert James',
  },
  {
    data: 'Robert James',
    ans: 'Jamesrobert@info.com',
  },
  {
    data: 'Phone No.',
    ans: '+123 365 5667 57',
  },
  {
    data: 'Location',
    ans: 'London, Uk',
  },
  {
    data: 'Gender',
    ans: 'Male',
  },
  {
    data: 'Age',
    ans: '33 years',
  },
  {
    data: 'Date of Birth',
    ans: '10/3/1990',
  },
  {
    data: 'Badge #',
    ans: 'PK - 13475',
  },
  
];
const renderItem = ({item}) => {
  return (
    <View style={styles.jobView}>
      <View style={styles.border}>
        <Text style={styles.data}>{item.data}</Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.ans}>{item.ans}</Text>
      </View>
    </View>
  );
};
const AdminProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
        <View style={{paddingBottom:140}}>
      <View style={styles.userView}>
        <JobHeader heading="Profile" />

        <View style={styles.imageView}>
          <ImageBackground
            style={styles.albert}
            source={images.jamesRobert}></ImageBackground>
        </View>
        <Text style={styles.name}>James Robert</Text>
        <View style={styles.albertView}>
          <Image style={styles.phone} source={images.phone}></Image>
          <Text style={styles.number}>+180 7890 654</Text>
          <View style={styles.row}>
          <Image style={styles.mapin} source={images.mappin}></Image>
          <Text style={styles.location}>San Francisco, CA</Text>
          </View>
        </View>
      </View>
      </View>
      <FlatList renderItem={renderItem} data={OverView} />
    </SafeAreaView>
  );
};

export default AdminProfile;
