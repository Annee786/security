import React from 'react';
import { Text, ScrollView} from 'react-native';
import styles from './styles';
import { images} from '../../utils';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Welcome Back" subText="Sign in to Continue" />
      <ScrollView>
        <Input
          image={images.mail}
          tabHeader="Email or Username"
          placeHolder="Admin@company.com"
          />
           <Input
          image={images.lock}
          tabHeader="Password"
          placeHolder="***********"
          isimage={images.eye}
          />
          <Text style={styles.forgettext}>Forgot Password?</Text>
          <Button  onPress={() => navigation.navigate('DashBoard')} heading="Login to Continue"/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
