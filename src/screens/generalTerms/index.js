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

const GeneralTerms = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.termsView}>
      <ScrollView>
        <Header heading="Start your business" alarmNotification />
        <StepCount />
        <View style={styles.tabView}>
          <Tab input="Team Roles" />
          <Tab input="Partnership Terms" />
        </View>
        <Text style={styles.textView}>General Partnership Terms:</Text>
        <Text style={styles.text}>(This is not the partnership agreement)</Text>
        <View style={styles.termsTab}>
          <Text style={styles.termsText}>Use our recommended terms</Text>
        </View>
        <Input placeHolder="1." />
        <Input placeHolder="2." />
        <Input placeHolder="3." />
        <AddMore />
        <SaveExitTab heading="Save and Exit" />
        <Button
          onPress={() => navigation.navigate('AddMembers')}
          heading="Next"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GeneralTerms;
