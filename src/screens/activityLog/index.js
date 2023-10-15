import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native';
const Log = [
  {
    clock: 'Clock-in',
    time: '(Late)9:15 am',
  },
  {
    clock: 'Clock-out',
    time: '6:30 pm',
  },
  {
    clock: 'Clock-in',
    time: '9:15 am',
  },
  {
    clock: 'Clock-out',
    time: '(Late)6:30 pm',
  },
];
const renderitem = ({item,navigation}) => {
  return (
    <View style={styles.clockView}>
      <TouchableOpacity onPress={() => navigation.navigate('Jobs')} style={styles.imagetextView}>
        <Image style={styles.loginview} source={images.login}></Image>
        <View style={styles.textView}>
          <Text style={styles.clocktext}>{item.clock}</Text>
          <Text style={styles.venu}>Falcon Warehouse</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.timetext}>{item.time}</Text>
        <Text style={styles.date}>Date : 09/10/2003</Text>
      </View>
    </View>
  );
};

const ActivityLog = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <View style={styles.userView}>
        <Image style={styles.arrow} source={images.arrowLeft}></Image>
        <View style={styles.imageView}>
          <ImageBackground
            style={styles.albert}
            source={images.albertFlores}></ImageBackground>
        </View>
        <Text style={styles.name}>Albert Flores</Text>
        <View style={styles.albertView}>
          <Image style={styles.phone} source={images.phone}></Image>
          <Text style={styles.number}>+180 7890 654</Text>
          <Image style={styles.mapin} source={images.mappin}></Image>
          <Text style={styles.location}>San Francisco, CA</Text>
        </View>
        <View style={styles.circleView}>
          <View style={styles.circle}>
            <ImageBackground
              style={styles.circleimage}
              source={images.penline}></ImageBackground>
          </View>
          <View style={styles.circle}>
            <ImageBackground
              style={styles.circleimage}
              source={images.trash}></ImageBackground>
          </View>
          <View style={styles.circle}>
            <ImageBackground
              style={styles.circleimage}
              source={images.pausecircle}></ImageBackground>
          </View>
        </View>
      </View>
      <BreadCrum heading="Activity Log" selectdate />
      <View style={styles.listView}>
        <View style={styles.imagetext}>
          <Image style={styles.company} source={images.cathouse}></Image>
          <Text style={styles.name1}>Falcon Warehouse</Text>
        </View>
        <Image style={styles.down} source={images.down}></Image>
      </View>
      <FlatList renderItem={renderitem} data={Log} />
    </SafeAreaView>
  );
};

export default ActivityLog;
