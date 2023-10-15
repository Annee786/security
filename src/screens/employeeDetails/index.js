import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
const OverView = [
  {
    data: 'First Name',
    ans: 'Albert',
  },
  {
    data: 'Last Name',
    ans: 'Flores',
  },
  {
    data: 'Location',
    ans: 'San Francisco',
  },
  {
    data: 'Address',
    ans: 'ST-14, Hawkens Road',
  },
  {
    data: 'Phone',
    ans: '+180 783 6883 ',
  },
  {
    data: 'Gender',
    ans: 'Male',
  },
  {
    data: 'Age',
    ans: '30 years',
  },
  {
    data: 'Badge #',
    ans: 'PK - 13689',
  },
  {
    data: 'Rate per week',
    ans: '$ 50 / week',
  },
  {
    data: 'Start Date',
    ans: '03/09/2022',
  },
  {
    data: 'Expire Date',
    ans: '17/12/2023',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.jobView}>
      <View style={styles.border}>
        <Text style={styles.data}>{item.data}</Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.data}>{item.ans}</Text>
      </View>
    </View>
  );
};

const EmployeeDetails = ({navigation}) => {
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
      <BreadCrum heading="Job Overview" activitytab="Activity Log" />
      <FlatList renderItem={renderItem} data={OverView} />
    </SafeAreaView>
  );
};

export default EmployeeDetails;
