import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import HomeScreenHeader from '../../components/homeScreenHeader';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import Cylinder from '../../components/cylinder';

const jobItems = [
  {
    image: images.fittingShower,
    jobTitle: 'Bath shower Fitting',
    date: '15 mins |  4 Miles ',
    charges: '$ 300',
  },

  {
    image: images.sinkClogged,
    jobTitle: 'Tap Replacement',
    date: '29 mins |  9.5 Miles',
    charges: '$ 170',
  },
];

const jobReview = [
  {
    image: images.plumber,
    jobTitle: 'Jobs Requests',
  },

  {
    image: images.history,
    jobTitle: 'Jobs History',
  },
  {
    image: images.rating,
    jobTitle: 'Ratings & Reviews',
  },

  {
    image: images.sinkClogged,
    jobTitle: 'Set Location',
  },
];

const jobfilters = [
  {
    job: 'Leaky Faucet',
  },

  {
    job: 'Water Heater Leak',
  },
  {
    job: 'Frozen Pipes',
  },

  {
    job: 'Toilet Leakage',
  },
];
const renderJobs = ({item}) => {
  return (
    <View style={styles.danialjobView}>
      <View style={styles.circle}>
        <Image style={styles.plumber} source={item.image}></Image>
      </View>
      <View style={styles.jobView}>
        <Text style={styles.textView}>{item.jobTitle}</Text>
        <Text style={styles.textView}>Requests</Text>
      </View>
    </View>
  );
};
const renderFilters = ({item}) => {
  return (
    <View style={styles.jobitemsView}>
      <Text style={styles.jobsitem}>{item.job}</Text>
      <Image style={styles.cross} source={images.cross}></Image>
    </View>
  );
};
const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.imageView} source={item.image}></Image>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.imagetext}>
            <Text style={styles.jobtitle}>{item.jobTitle}</Text>
            <Text style={styles.$Text}>{item.charges}</Text>
          </View>
          <View style={styles.imagetext}>
            <Text style={styles.textView}>View full details</Text>
            <View style={styles.pindateview}>
              <Image
                style={styles.calenderimage}
                source={images.mappin}></Image>
              <Text style={styles.dateText}>{item.date} </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cylinderview}>
        <Cylinder heading="Decline" isred />
        <Cylinder heading="Accept" isBlue />
      </View>
    </View>
  );
};

const DashBoard = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <HomeScreenHeader heading="Welcome Back!" subheading="Danial 👋" danial />
      <FlatList renderItem={renderJobs} data={jobReview} />
      <BreadCrum heading="Job Filters" subheading="Change" />
      <FlatList renderItem={renderFilters} data={jobfilters} />

      <BreadCrum heading="Job Results" />
      <FlatList renderItem={renderItem} data={jobItems} />
    </SafeAreaView>
  );
};

export default DashBoard;
