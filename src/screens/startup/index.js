import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const StartUp = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.startupView}>
      <View style={styles.box}>
        <Text style={styles.startupText}>START YOUR BUSINESS</Text>
      </View>
      <View style={styles.teamView}>
      <Image style={styles.team} source={images.Group143} />
      </View>
      <View style={styles.workingArea}>
        <View style={styles.imageCircle}>
          <Image
            style={styles.workingImage}
            source={images.workingImage}></Image>
        </View>
        <Text style={styles.joiningText}>Join a Business As a Partner</Text>
        <Text style={styles.subText}>
          - Work for equity (own shares of the business)
        </Text>
        <Text style={styles.text}>- Work as a freelancer (COMING SOON)</Text>
        <View style={styles.startTab}>
          <Text style={styles.startText}>Start</Text>
        </View>
      </View>
      <Image style={styles.team} source={images.Group143} />
    </SafeAreaView>
  );
};

export default StartUp;
