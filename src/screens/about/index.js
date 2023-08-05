import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrumbs from '../../components/breadCrumbs';
import MarkCuban from '../../components/markView';
import Tab from '../../components/tab';
const description = [
  {
    image: 'me',
    text: 'About me ',
    decription: 'onooi',
  },
  {
    image: 'workGroup',
    text: 'Work typeIn person',
    decription: '',
  },
  {
    image: 'lastSeen',
    text: 'Last Seen',
    decription: '50 Mins Ago',
  },
  {
    image: 'availability',
    text: 'Availibility',
    decription: '40 Hrs/Week',
  },
  {
    image: 'workPrefer',
    text: 'Work Preference',
    decription: 'Work for Equity',
  },
];
const About = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header alarmNotification />

        <MarkCuban />
        <View style={styles.tabView}>
          <Tab input="Chat" chat chatbox />
          <Tab input="Invite to partner up" add chatbox />
        </View>
        <View style={styles.line}></View>
        <View style={styles.tabView}>
          <Tab input="Expertise" working expert />
          <Tab input="About" about transparent />
        </View>

        {description.map(item => {
          return (
            <View style={styles.skillsBox}>
              <View style={styles.designs}>
                <Image style={styles.imageView}>source={item.image}</Image>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.description}>{item.decription}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
