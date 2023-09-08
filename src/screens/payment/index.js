import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import Cylinder from '../../components/cylinder';
import Input from '../../components/input';
import TimeTab from '../../components/timeTab';
import Button from '../../components/button';

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Payment" />
      <View style={styles.addressView}>
        <View style={styles.mapinView}>
          <Image style={styles.mapin} source={images.mappin}></Image>
        </View>
        <View style={styles.textView}>
          <Text style={styles.address}>Address</Text>
          <Text style={styles.subAdres}>
            4140 Parker Rd. Allentown, New Mexico 31134
          </Text>
          <Text style={styles.subAdres}>
            Washington Ave. Manchester, Kentucky
          </Text>
        </View>
        <Text style={styles.edit}>Edit</Text>
      </View>
      <View style={styles.cylinderView}>
        <Cylinder heading="Payment Method" imageinblue />
        <Cylinder heading="Cash at Doorstep" imageingrey />
      </View>
      <View style={styles.inputView}>
        <Input
          tabHeader="Card Holder Name"
          placeHolder="Enter Card Holder Name"
          blackHeader
        />
        <Input
          tabHeader="Card Number"
          placeHolder="Enter your Card Number"
          blackHeader
        />
      </View>
      <View style={styles.dateView}>
        <TimeTab tabHeader="CVV" placeHolder="xxx" />
        <TimeTab tabHeader="Date" placeHolder="07/23" />
      </View>
      <Button  onPress={() => navigation.navigate('BookingConfirmed')}  heading="Confirm" isBlue />
    </SafeAreaView>
  );
};

export default Payment;
