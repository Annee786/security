import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { images } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';

const ChatWithPlumber = ({ item }) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Messages" />
      <View style={styles.bottomView}>
      <View style={styles.chatView}>
        <Text style={styles.dateview}>Today at 12:33</Text>
        <View style={styles.chatBox}>
          <Image
            style={styles.imageView}
            source={images.PersonalchatBubble}></Image>
        </View>
        <View style={styles.ansbox}>
          <Text style={styles.answer}>
            Ok , I am very near to your location.
          </Text>
          <Text style={styles.time}>09.45</Text>
        </View>
      </View>
        <View style={styles.line}></View>
        <View style={styles.answerPortion}>
          <Image style={styles.icon} source={images.plus}></Image>
          <View style={styles.answerbox}>
            <Text style={styles.answer}>That’s nice.</Text>
          </View>
          <Image style={styles.icon} source={images.sendicon}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatWithPlumber;
