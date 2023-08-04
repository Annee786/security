import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Header from '../../components/header';
import SaveExitTab from '../../components/saveExitTab';
import {SafeAreaView} from 'react-native-safe-area-context';

const BusinessPlan = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.planView}>
      <Header heading="Start your business" />
      <View style={styles.planBox}>
        <Image style={styles.pdfimage} source={images.pdfImage}></Image>
        <Text style={styles.planText}> Business Plan</Text>
        <Image style={styles.pdfimage} source={images.dots}></Image>
      </View>
      <SaveExitTab heading="Save and Exit" />
      <Button heading="Publish" />
    </SafeAreaView>
  );
};

export default BusinessPlan;
