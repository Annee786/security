import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitlesTab from '../../components/titlesTab/indes';
import MotoMobileHeader from '../../components/motoMobilesHeader';

const CampaignMilestone = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header heading="Moto Mobiles" />
        <View style={styles.shadowView} />
        <MotoMobileHeader />
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Milestones</Text>
        </View>
        <TitlesTab title="Overview" />
        <TitlesTab title="Team Roles" />
        <TitlesTab title="Partnership Terms" />
        <TitlesTab title="Milestones" />
        <TitlesTab title="Business Plan" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampaignMilestone;
