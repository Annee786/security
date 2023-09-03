import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import {FlatList} from 'react-native';
import Cylinder from '../../components/cylinder';

const offers = [
  {
    name: 'Kia Rao Mathews',
    rating: '4.7',
    number: '(123)',
    charges: '$ 300',
    time: '15 mins |  3 km',
    image: images.kiaRao,
  },
  {
    image: images.jamesSmith,
    name: 'James Smith',
    rating: '4.3',
    number: '(450)',
    charges: '$ 320',
    time: '10 mins |  1.2 km',
  
  },
  {
    name: 'Ford Mondeo',
    rating: '4.8',
    number: '(139)',
    charges: '$ 270',
    time: '30 mins |  7 km',
  },
];
const renderItem = ({item,navigation}) => {
  return (
    <View style={styles.requestTab}>
      <View style={styles.imageTextView}>
        <Image style={styles.imageView} source={item.image}></Image>
        <View style={styles.nameView}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.starView}>
            <Image style={styles.starimage} source={images.star}></Image>
            <Text style={styles.rate}>{item.rating}</Text>
            <Text style={styles.number}>{item.number}</Text>
          </View>
        </View>
        <View style={styles.chargesView}>
          <Text style={styles.charges}>{item.charges}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.cylinderView}>
        <Cylinder  onPress={() => navigation.navigate('Notification')} heading="Decline" isred />
        <Cylinder   onPress={() => navigation.navigate('Notification')} heading="Accept" isBlue />
      </View>
    </View>
  );
};

const PlumberRequests = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Cancel" isblue />
      <ScrollView>
        <View style={styles.textView}>
          <Text style={styles.text}>You can accept or decline offers</Text>
          <Text style={styles.text}>from plumbers.</Text>
        </View>

        <FlatList renderItem={renderItem} data={offers} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlumberRequests;
