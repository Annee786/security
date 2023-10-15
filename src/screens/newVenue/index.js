import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderTab from '../../components/headerTab';
import Button from '../../components/button';
import JobHeader from '../../components/jobHeader';

const AddnewVenue = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <View style={styles.topview}>
<JobHeader heading="Add Venue" />
<View style={styles.addingView}>
  <View style={styles.circle}>
    <ImageBackground style={styles.camera}source={images.Camera}></ImageBackground>
  </View>
  <Text style={styles.addtext}>Add Photo / logo</Text>
</View>
      </View>
      <HeaderTab tabHeader="Venue Name"placeHolder="The Cat House"/>

      <HeaderTab tabHeader="Venue Email Address"placeHolder="Cathouse@info.com"/>
      <HeaderTab tabHeader="Phone Number"placeHolder="+12 689 6678 4243"/>
<Button  onPress={() => navigation.navigate('SupportChatList')} heading="Confirm"/>
      </SafeAreaView>
  );
};

export default AddnewVenue;