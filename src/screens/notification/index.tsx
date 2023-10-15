import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {colors, images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import JobHeader from '../../components/jobHeader';

const notification = [
  {
    name: 'Kristin Watson',
    image: images.kristin,
    time: '04:15 am',
  },
  {
    name: 'Albert Flores',
    image: images.AF,
    time: '07:38 am',
  },
  {
    name: 'Theresa Webb',
    image: images.kristin,
    time: '06:32 pm',
  },
  {
    name: 'Jane Cooper',
    image: images.janecooper,
    time: '12:23 pm',
  },
  {
    name: 'Leslie Alexander',
    image: images.jamesRobert,
    time: '12:23 pm',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.updateview}>
      <Image style={styles.imageview} source={item.image}></Image>
      <View style={styles.coloumview}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.detail}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Notifications" />
      <View style={styles.updateview}>
        <Image style={styles.imageview} source={images.robertfox}></Image>
        <View style={styles.coloumview}>
          <Text style={styles.name}>Robert Fox</Text>
          <Text style={styles.detail}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.time}>12:33 pm</Text>
        </View>
      </View>
      <BreadCrum heading="Other Notifications" />
      <FlatList renderItem={renderItem} data={notification} />
    </SafeAreaView>
  );
};

export default Notification;
