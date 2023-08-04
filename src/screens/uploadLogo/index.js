import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import SaveExitTab from '../../components/saveExitTab';
import StepCount from '../../components/stepCount';
const UploadLogo = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.uploadView}>
      <Header heading="Start your business" alarmNotification />
      <StepCount />
      <View style={styles.businessBox}>
        <Text style={styles.text}>Upload your Logo </Text>
      </View>

      <View style={styles.circleView}>
        <Image style={styles.imageView} source={images.camera}></Image>
      </View>
      <View style={styles.businessBox}>
        <Text style={styles.text}>Add an Image Cover </Text>
      </View>
      <View style={styles.uploadBox}>
        <Image styl={styles.uploadimage} source={images.picUpload} />
        <Text style={styles.uploadText}>Upload </Text>
      </View>
      <SaveExitTab heading="Save and Exit" />
      <Button onPress={() => navigation.navigate('BusinessRoles')} heading="Next" />
    </SafeAreaView>
  );
};

export default UploadLogo;
