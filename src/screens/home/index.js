import React from 'react';
import {View, Image, Text, ScrollView, FlatList} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreenHeader from '../../components/homeScreenHeader';
import {images} from '../../utils';
import BreadCrumb from '../../components/breadCrumbs';
import Cylinder from '../../components/cylinder';

const jobsReview = [
  {
    image: images.plumber,
    text: 'Jobs Requests',
  },
  {image: images.history, text: 'Jobs History'},
  {image: images.rating, text: 'Ratings & Reviews'},
  {image: images.symbolLocation, text: 'Set Location'},
];
const Filters = [
  {
    jobs: 'Leaky Faucet',
  },
  {jobs: 'Water Heater Leak'},
  {jobs: 'Frozen Pipes'},
  {jobs: 'Toilet Leakage'},
];
const renderJobFilters = ({item}) => {
  return (
    <View style={styles.filtersView}>
      <Text style={styles.filtersText}>{item.jobs}</Text>
      <Image style={styles.cross} source={images.cross}></Image>
    </View>
  );
};

const renderJobReview = ({item}) => {
  return (
    <View style={styles.userView}>
      <View style={styles.circle}>
        <Image style={styles.reviewimage} source={item.image}></Image>
      </View>
      <Text style={styles.userjobText}>{item.text}</Text>
    </View>
  );
};
const Home = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <HomeScreenHeader heading="Welcome Back!" subheading="Danial 👋" danial />
      <ScrollView>
        <FlatList
          renderItem={renderJobReview}
          data={jobsReview}
          numColumns={2}
          contentContainerStyle={{paddingHorizontal:10}}
        />
        <BreadCrumb heading="Job Filters" subheading="Change" />
        <FlatList
          renderItem={renderJobFilters}
          data={Filters}
          numColumns={2}
          contentContainerStyle={{paddingHorizontal: 8}}
        />
        <BreadCrumb heading="Job Results" />
        <View style={styles.resultView}>
          <View style={styles.jobsView}>
            <Image
              style={styles.jobimage}
              source={images.fittingShower}></Image>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.userjobText}>Bath shower Fitting</Text>
              <Text style={styles.viewtext}>View full details</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.charges}>$ 300</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.image} source={images.mappin}></Image>
                <Text style={styles.time}>15 mins | 4 Miles</Text>
              </View>
            </View>
          </View>
<View style={styles.cylinder}>
          <Cylinder heading='Decline' color='white' borderColor='red' textcolor='red'/>
            <Cylinder heading='Accept'  color='blue' borderColor='blue' textcolor='white'/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
