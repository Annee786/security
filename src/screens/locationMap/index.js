import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';
import { images } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import { ImageBackground } from 'react-native';

const LocationMap = ({ }) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Location" />
      <ScrollView>
        <View style={styles.mapView}>
          <ImageBackground
            style={styles.map}
            source={images.map}>
            <Image style={styles.mapPin} source={images.mappin}></Image>
          </ImageBackground>
        </View>

        <View style={styles.locationBox}>
          <Text style={styles.locationText}>Location</Text>
          <View style={styles.addressTab}>
            <Text style={styles.address}>ST # 04 , Twin Tower, US</Text>
            <Image style={styles.mapPin} source={images.mappin}></Image>
          </View>
          <View style={styles.confirmTab}>
            <Text style={styles.text}>Confirm</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationMap;
