import React from 'react';
import {View, Text, Image, } from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Header from '../../components/header';
import SaveExitTab from '../../components/saveExitTab';
import {SafeAreaView} from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';

const PdfUpload = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.planView}>
      <Header heading="Start your business"profileImage />
      <StepCount />
      <Text style={styles.guideText}>
        Use our business plan guide from the website
      </Text>
      <Text style={styles.web}> www.jobrebuilder.com</Text>
      <View style={styles.planBox}>
        <Text style={styles.planText}>Select PDF</Text>
        <View style={styles.selectTab}>
          <Text style={styles.selectText}>Select </Text>
          <Image style={styles.pdfimage} source={images.pdfImage}></Image>
        </View>
      </View>
      <Text style={styles.publishText}>
        Publish if you don’t have a business plan yet
      </Text>
      <View style={styles.UploadBox}>
        <Text style={styles.uploadText}>Upload</Text>
        <Image style={styles.pdfimage} source={images.pdfImage}></Image>
      </View>
      <SaveExitTab heading="Save and Exit" />
      <Button heading="Publish" />
    </SafeAreaView>
  );
};

export default PdfUpload;
