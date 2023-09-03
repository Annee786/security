import React from 'react';
import {View, Image, Text, } from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';

const messages = [
  {
    image: images.jamesSmith,
    mainText: 'Ricky Dam',
    text: 'When will you arrive?',
    sidetext: '1:47',
  },

  {
    image: images.ricky,
    mainText: 'Ricky Dam',
    text: 'Please , Call me !',
    sidetext: '10:23',
  },

  {
    image: images.smith,
    mainText: 'Smith Murphy',
    text: 'Do you find my location?',
    sidetext: '4:44',
  },

  {
    image: images.jameswilliam,
    mainText: 'James Williams',
    text: 'When will you arrive?',
    sidetext: '12:33',
  },

  {
    image: images.jamesSmith,
    mainText: 'Jack Kalis',
    text: 'Send me your address in chat.',
    sidetext: '1:47',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.notificationView}>
      <View style={styles.logoImage}>
        <Image style={styles.logo} source={item.image}></Image>
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
const Messages = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Messages" />

      <BreadCrum heading="New Messages (3)" />
      <FlatList renderItem={renderItem} data={messages} />
    </SafeAreaView>
  );
};

export default Messages;
