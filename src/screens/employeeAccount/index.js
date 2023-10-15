import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../utils';

import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
import SearchTab from '../../components/searchTab';

const employees = [
  {image: images.Darell, name: 'Darrell Steward'},
  {image: images.Albert, name: 'Albert Flores'},
  {image: images.Dianne, name: 'Dianne Russell'},

  {image: images.Esther, name: 'Esther Howard'},

  {image: images.Ronald, name: 'Ronald Richards'},

  {image: images.Ariene, name: 'Arlene McCoy'},

  {image: images.Dianne, name: 'Jerome Bell'},

  {image: images.Bessie, name: 'Bessie Cooper'},

  {image: images.Kathryn, name: 'Kathryn Murphy'},
];
const renderItem = ({item,navigation}) => {
  return (
    <View style={styles.employeView}>
      <View style={styles.nameimageview}>
        <Image style={styles.employeimage} source={item.image}></Image>
        <Text style={styles.employename}>{item.name}</Text>
      </View>
      <TouchableOpacity  onPress={() => navigation.navigate('AddnewEmployee')} style={styles.detailtab}>
        <Text style={styles.detailtext}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const EmployeeAccount = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Employees Account" />
      <ScrollView>
        <SearchTab heading="Search venue" image={images.search} />
        <BreadCrum heading="Total Employees (200)" filtertab />
        <FlatList renderItem={renderItem} data={employees} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmployeeAccount;
