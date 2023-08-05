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
const skills = [
  {
    skillname: 'UI/UX Design',
  },
  {
    skillname: 'Logo Design',
  },
];
const ProfileView = ({navigation, onPress}) => {
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
        <BreadCrumbs heading="Description" />
        <MessageBox
          placeHolder="UI/UX Designer"
          inputmessage="I can design UI/UX on many platforms such as:
Flutter, Bubble, Figma,  "
          textinput
        />
        <BreadCrumbs heading="Skills" />
        <View style={styles.skillsBox}>
          {skills.map(item => {
            return (
              <View style={styles.designs}>
                <Text style={styles.skillsText}>{item.skillname}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileView;
