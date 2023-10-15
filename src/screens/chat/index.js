import React from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import JobHeader from '../../components/jobHeader';
import Input from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';

const Chat = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Chat" />
      <View style={styles.chatView}>
        <Image style={styles.imageView} source={images.EstherHoward}></Image>
        <View style={{flexDirection: 'column'}}>
          <ImageBackground
            style={styles.greychatbox}
            source={images.greychatbox}>
            <Text style={styles.chatText1}>
              Quis autem vel eum iure reprehenderit qui in .
            </Text>
          </ImageBackground>
          <Text style={styles.time}>12:33 am</Text>
        </View>
      </View>
      <ImageBackground style={styles.chat} source={images.chatBox}>
        <Text style={styles.chatText}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es
        </Text>
      </ImageBackground>
      <Text style={styles.anstime}>12:33 am</Text>

    </SafeAreaView>
  );
};

export default Chat;
