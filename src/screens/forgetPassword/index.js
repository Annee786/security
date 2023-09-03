import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header
        heading="Forget Password"
        subText="Enter your email address we’ll sent you reset. "
      />
      <ScrollView>
        <Input
          tabHeader="Email address"
          placeHolder="name@example.com"
          isEmail
        />
        <Button  onPress={() => navigation.navigate('HomeScreen')} heading="Send Request" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
