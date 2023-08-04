import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';

const dealsArray = [
  {
    records: 'Overview',
  },
  {
    records: 'Team Roles',
  },
  {
    records: 'Partnership Terms',
  },
  {
    records: 'Milestones',
  },
  {
    records: 'Business Plan',
  },
];

const CampaignMenu = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header heading="Moto Mobiles" />
        <View style={styles.shadowView} />

        <MotoMobileHeader />
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Overview</Text>
          <Image style={styles.overView} source={images.arrowUp}></Image>
        </View>
        {dealsArray.map(item => {
          return (
            <View style={styles.OverView}>
              <Text style={styles.text}>{item?.records}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampaignMenu;
