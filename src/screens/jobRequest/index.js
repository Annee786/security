import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {images, colors} from '../../utils';
import JobHeader from '../../components/jobHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import Cylinder from '../../components/cylinder';

const jobsView = [
  {
    image: images.barone,
    name: 'Barone LLC.',
    charges: '$ 55.90',
  },

  {
    image: images.abstergo,
    name: 'Abstergo Ltd.',
    charges: '$17.84',
  },
  {
    image: images.garage,
    name: 'The Garage',
    charges: '$17.84',
  },
  {
    image: images.binford,
    name: 'Binford Ltd.',
    charges: '$14.81',
  },
];
const renderitem = ({item,navigation}) => {
  return (
    <View style={styles.borderView}>
      <View style={styles.jobsview}>
        <View style={styles.row}>
          <Image style={styles.imageView} source={item.image}></Image>
          <View style={styles.textView}>
            <Text style={styles.jobvenue}>Job Venue </Text>
            <Text style={styles.logoname}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.textView2}>
          <Text style={styles.charges}>{item.charges}</Text>
          <Text style={styles.permonth}>/ per month</Text>
        </View>
      </View>
      <View style={styles.dateview}>
        <Image style={styles.calender} source={images.calenderdays}></Image>
        <Text style={styles.jobvenue}>Date : 09/10/2003</Text>
        <Image style={styles.calender} source={images.calendarclock}></Image>
        <Text style={styles.jobvenue}>Timings: 10:00 - 12:30 am</Text>
      </View>
      <View style={styles.row}>
        <Cylinder  onPress={() => navigation.navigate('EmployeeJobDetails')} 
          image={images.cross}
          heading="Cancel"
          textcolor={colors.cylinder}
          borderColor={colors.cylinder}
        />
        <Cylinder  onPress={() => navigation.navigate('EmployeeJobDetails')} 
          image={images.check}
          heading="Accept"
          textcolor={colors.white}
          borderColor={colors.cylinder}
          color={colors.cylinder}
        />
      </View>
    </View>
  );
};

const JobRequest = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Job Request" />
      <FlatList renderItem={renderitem} data={jobsView} />
    </SafeAreaView>
  );
};

export default JobRequest;
