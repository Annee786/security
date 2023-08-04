import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../../components/tab';
import MotoMobileHeader from '../../components/motoMobilesHeader';

const Team = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Team" />
      <View style={styles.boxView}>
        <Image style={styles.dotsimage} source={images.verticalDots}></Image>
       <View style={styles.imageView}>
        <Image style={styles.picimage} source={images.mikeDean}></Image>
        <Text style={styles.name}>Mike Dean</Text>
        <Text style={styles.ceo}>CEO</Text>
        <View style={styles.chatTab}>
          <Text style={styles.chat}>Chat</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Team;
