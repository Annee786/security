import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../../components/tab';
import SaveExitTab from '../../components/saveExitTab';
import StepCount from '../../components/stepCount';
import AddMore from '../../components/addMore';

const Home = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.termsView}>
      <ScrollView>
        <Header heading="Start your business" alarmNotification />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
