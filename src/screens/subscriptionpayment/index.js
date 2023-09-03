import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import TimeTab from '../../components/timeTab';
import Button from '../../components/button';

const SubscriptionPayment = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Payment" />
      <View style={styles.subscriptionPlan}>
        <View style={styles.finderView}>
          <Image
            style={styles.planimage}
            source={images.subscriptionPlan}></Image>
        </View>
        <View style={styles.serviceView}>
          <View style={styles.textView}>
            <Text style={styles.plumfinder}>PLUMB FINDER</Text>
            <Text style={styles.plumfinder}>SERVICE</Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.chargesrate}>€ 7.50 </Text>
            <Text style={styles.vat}> + VAT</Text>
          </View>
        </View>
        <Text style={styles.detailtext}>Full features details</Text>
      </View>
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

      <View style={styles.dateView}>
        <TimeTab tabHeader="CVV" placeHolder="xxx" />
        <TimeTab tabHeader="Date" placeHolder="07/23" />
      </View>
      <Button heading="Confirm" isBlue />
    </SafeAreaView>
  );
};

export default SubscriptionPayment;
