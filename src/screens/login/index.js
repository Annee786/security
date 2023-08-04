import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.loginView}>
      <View style={styles.imagesView}>
        <View style={styles.backView}>
          <Image style={styles.arrowimage} source={images.backArrow} />
        </View>

        <Image style={styles.halfcircle} source={images.halfCircle} />
        <Image style={styles.halfcircle} source={images.halfCircle} />
      </View>
      <View style={styles.accountButton}>
        <Text style={styles.creatngacountText}>Create an Account</Text>
      </View>
      <View style={styles.lineView}>
        <View style={styles.leftborder}></View>
        <Text style={styles.lineText}>OR LOGIN</Text>
        <View style={styles.leftborder}></View>
      </View>

      <Input placeHolder="huzayfahhanif@gmail.com" isEmail />
      <Input placeHolder="Password" isPassword />
      <Button onPress={() => navigation.navigate('SignUp')} heading="Login" />
      <Text style={styles.forgetText}>Forget Password?</Text>
    </SafeAreaView>
  );
};

export default Login;
