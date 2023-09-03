import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginUnfill = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header
        heading="Welcome Back!"
        subText="Login with your data entered while signup."
      />
      <ScrollView>
        <Input
          tabHeader="Email address or user name"
          placeHolder="name@example.com"
          isEmail
        />
        <Input tabHeader="Password" placeHolder="******" isEye />
        <Button heading="Sign In" isgrey />
        <View style={styles.forgetView}>
          <Text style={styles.forgetText}>Forget Password?</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.continueView}>
          <View style={styles.lineView}></View>
          <Text style={styles.continueText}>or continue with</Text>
          <View style={styles.lineView}></View>
        </View>
        <Button onPress={() => navigation.navigate('SignUpUnfill')} 
        inImage heading="Sign In with Google" />
        <View style={styles.signupView}>
          <Text style={styles.text}>Don’t have an account? </Text>
          <Text style={styles.signupText}>Sign up</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginUnfill;
