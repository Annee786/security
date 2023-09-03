import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpUnfill = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header
        heading="Get Yourself Register"
        subText="Fill this below form to create your account. "
      />
      <ScrollView>
        <Input tabHeader="Full Name" placeHolder="Your Name" isUser />
        <Input
          tabHeader="Email address"
          placeHolder="name@example.com "
          isEmail
        />
        <Input
          tabHeader="Phone Number"
          placeHolder="Your Phone Number"
          isPhone
        />
        <Input tabHeader="Password" placeHolder="******" isEye />
        <Button onPress={() => navigation.navigate('ForgetPassword')} 
        heading="Sign Up"isblue />
        <View style={styles.signupView}>
          <Text style={styles.text}>Already Registered?</Text>
          <Text style={styles.signupText}>Sign In</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpUnfill;
