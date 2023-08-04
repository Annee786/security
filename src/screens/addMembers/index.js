import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import StepCount from '../../components/stepCount';

const AddMembers = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.termsView}>
      <ScrollView>
        <Header heading="Start your business" alarmNotification />
        <StepCount />
        <Text style={styles.addingText}>Add a current team member</Text>
        <View style={styles.circleView}>
          <Image style={styles.imageView} source={images.camera}></Image>
        </View>
        <Input placeHolder="Search from users" search />
        <Input placeHolder="Position" />
        <Input placeHolder="Role" />
        <Button
          onPress={() => navigation.navigate('Milestone')}
       
        heading="Add Member"/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddMembers;
