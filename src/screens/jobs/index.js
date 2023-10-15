import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import JobHeader from '../../components/jobHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import SearchTab from '../../components/searchTab';

const jobs = [
  {
    image: images.cathouse,
    name: 'The Cat house',
  },
  {
    image: images.garage,
    name: 'The Garage',
  },
  {
    image: images.hummingbird,
    name: 'Humming Birds',
  },
  {
    image: images.cathouse,
    name: 'Marco’s ',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.jobsView}>
      <View style={styles.venue}>
        <View style={styles.imagename}>
          <Image style={styles.cathouse} source={item.image}></Image>
          <Text style={styles.nameView}>{item.name}</Text>
        </View>
        <View style={styles.imagename}>
          <View style={styles.circle}>
            <Image style={styles.imageview} source={images.trash}></Image>
          </View>
          <View style={styles.circle}>
            <Image style={styles.imageview} source={images.pausecircle}></Image>
          </View>
        </View>
      </View>
      <View style={styles.lineView}></View>
      <View style={styles.timeView}>
        <View style={styles.imagename}>
          <Image style={styles.dateimage} source={images.calenderdays}></Image>
          <Text style={styles.timetext}>Time : 09/10/2003</Text>
        </View>
        <View style={styles.imagename}>
          <Image style={styles.dateimage} source={images.euro}></Image>
          <Text style={styles.timetext}>Time : 09/10/2003</Text>
        </View>
      </View>
      <View style={styles.imageandname}>
        <Image style={styles.dateimage} source={images.euro}></Image>
        <Text style={styles.timetext}>Time : 09/10/2003</Text>
      </View>
    </View>
  );
};
const Jobs = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Jobs" addtab />
      <SearchTab onPress={() => navigation.navigate('JobPost')} heading="Search venue" image={images.search}/>
      <View style={{flexDirection:'row'}}>  
            <View style={styles.pastView}>
        <Text style={styles.pastjob}>Past Jobs</Text>
      </View>
      <View style={styles.activeView}>
      <Text style={styles.activejob}>Active Jobs</Text>
      </View>
      </View>

      <BreadCrum heading="Total Jobs (98)" filtertab />
      <FlatList renderItem={renderItem} data={jobs} />
    </SafeAreaView>
  );
};

export default Jobs;
