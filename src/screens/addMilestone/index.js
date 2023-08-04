import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import SaveExitTab from '../../components/saveExitTab';
import AddMore from '../../components/addMore';

const AddMilestone = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Start your business" />
      <View style={styles.milestoneTab}>
        <View style={styles.tabView}>
          <View style={styles.percent}>
            <Text style={styles.percentText}>0%</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.mainText}>Milestone 1</Text>
            <Text style={styles.subText}>Your first milestone to success</Text>
          </View>
          <Image style={styles.imageView} source={images.greyDots}></Image>
        </View>
        <View style={styles.dateView}>
          <Image style={styles.dateimage} source={images.duedate}></Image>
          <Text style={styles.dateText}>Due : 20 Jan, 2022</Text>
        </View>
      </View>
      <AddMore />
      <SaveExitTab heading="Save and Exit" />
      <Button onPress={() => navigation.navigate('Milestone')} heading="Next" />
    </SafeAreaView>
  );
};

export default AddMilestone;
