import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.signupView}>
      <Header heading="Create an Account" />
      <Input placeHolder="huzayfahhanif@gmail.com" isEmail />
      <Input placeHolder="Password" isPassword/>
      <Input placeHolder="Confirm Password" isPassword />
      <Input placeHolder="Phone Number" />
      <Button  onPress={() => navigation.navigate('PersonalInfo')} heading="Create" />
      <View style={styles.lineView}>
        <View style={styles.leftborder}></View>
        <Text style={styles.lineText}>OR</Text>
        <View style={styles.leftborder}></View>
      </View>
      <View style={styles.container}>
        <View style={styles.imagetextView}>
          <Image style={styles.googleimage} source={images.google}></Image>
          <Text style={styles.continuetext}>Continue with Google</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.imagetextView}>
          <Image style={styles.googleimage} source={images.faceBook}></Image>
          <Text style={styles.continuetext}>Continue with Facebook</Text>
        </View>
      </View>
      <View style={styles.Text}>
        <Text style={styles.text}>Already have an account?</Text>
        <Text style={styles.logintext}> Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
