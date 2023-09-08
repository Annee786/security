import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import Button from '../../components/button';

const BookingConfirmed = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <View style={styles.circle}>
        <Image style={styles.check} source={images.checkcircleblue}></Image>
      </View>
      <View style={styles.bookingView}>
        <Text style={styles.bookinText}>Booking Confirmed</Text>
      </View>
      <View style={styles.subText}>
        <Text style={styles.text}>
          Your plumbing service appointment has been successfully scheduled. A
          plumber will be on their way at the designated time.
        </Text>
        <Text style={styles.thanku}>
        Thank you for
          choosing our app!
        </Text>
     
      </View>
      <Button  onPress={() => navigation.navigate('PlumberDetails')}  heading="Track your Plumber" isWhite/>
      <Button  onPress={() => navigation.navigate('PlumberDetails')}  heading="Back to Homepage" isBlue/>
    </SafeAreaView>
  );
};

export default BookingConfirmed;
