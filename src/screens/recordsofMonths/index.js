import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';
import TitlesTab from '../../components/titlesTab/indes';

const RecordsOfMonth = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Records" />
      <View style={styles.monthView}>
        <Text style={styles.months}>January</Text>
      </View>
      <TitlesTab title="UI/UX Design" />

      <TitlesTab title="Back end development " />

      <TitlesTab title="Front end development " />
      <View style={styles.contributionTab}>
        <Text style={styles.textView}>+ Add a  new contribution </Text>
      </View>

    </SafeAreaView>
  );
};

export default RecordsOfMonth;
