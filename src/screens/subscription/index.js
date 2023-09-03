import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import TimeTab from '../../components/timeTab';
import Button from '../../components/button';
import {FlatList} from 'react-native';


const Category = [
  {servicename:'PLUMB FINDER',
  subtext:'SERVICE',
  charges:'€ 7.50  +',},
  {servicename:'PLUMB FINDER',
  subtext:' HOME ESSENTIAL',
  charges:'€ 14.99  +',},
   {servicename:'PLUMB FINDER',
   subtext:'HOME COMPLETE',
  charges:'€ 19.99  +',}, 
  {servicename:'PLUMB FINDER',
  subtext:' LANDLORD COMPLETE',
  charges:'€ 25.99  +',},
];

const renderItem =({item})=>{
  return (
    <View style={styles.serviceBox}>
    <Text style={styles.serviceText}>{item.servicename}</Text>
    <Text style={styles.serviceText}>{item.subtext}</Text>
    <Text style={styles.chargesText1}>{item.charges}</Text>
    <Text style={styles.chargesText}>VAT</Text>
    <View style={styles.line}></View>
  </View>

  )};
const Subscription = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Subscription" />
      <View style={styles.textView}>
        <Text style={styles.intro}>Introducing Plumb Finder</Text>
        <Text style={styles.plan}>Subscription Plan</Text>
        <Text style={styles.new}>With all new features</Text>
      </View>
          <View style={styles.chooseTab}>
        <Text style={styles.chooseText}>Choose</Text>
      </View>
      <FlatList
        renderItem={renderItem}
        data={Category}
        numColumns={4}
        />

      <Text style={styles.chooseSubText}>Choose your subscription</Text>
      <Text style={styles.features}>Features</Text>
      <View style={styles.lineView}></View>
      <View style={styles.annualView}>
        <View style={styles.tickView}>
          <Text style={styles.annualtext}>
            1 x Annual Boiler service with annual reminder.{' '}
          </Text>
          <Image style={styles.check} source={images.check}></Image>
        </View>
        <View style={styles.tickView}>
          <Text style={styles.annualtext}>
            1 x Annual Gas Safety Certificate with annual reminder.
          </Text>
          <Text style={styles.NA}>N/A</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Subscription;
