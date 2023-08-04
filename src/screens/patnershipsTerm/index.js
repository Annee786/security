import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../../components/tab';
import MotoMobileHeader from '../../components/motoMobilesHeader';
const dealsArray = [
  {
    number: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit amet porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus egestas, ',
  },
  {
    number: '2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit amet porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus egestas, ',
  },
  {
    number: '3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit amet porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus egestas, ',
  },
];

const PatnerShipTerm = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Moto Mobiles" />

      <ScrollView>
        <MotoMobileHeader />
        
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Partnership Terms </Text>
        </View>
        {dealsArray.map(item => {
          return (
            <View>
              <View style={styles.termsView}>
                <View style={styles.circleCount}>
                  <Text style={styles.counting}>{item?.number}</Text>
                </View>
                <Text style={styles.termsText}>{item?.text}</Text>
              </View>
              <View style={styles.lineView} />
            </View>
          );
        })}
        <View style={styles.updateTab}>
          <Text style={styles.update}>Update</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatnerShipTerm;
