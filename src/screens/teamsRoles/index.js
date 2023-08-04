import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';
import TitlesTab from '../../components/titlesTab/indes';

const TeamsRoles = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header heading="Moto Mobiles" />
        <View style={styles.shadowView} />
        <MotoMobileHeader />
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Team Roles</Text>
        </View>
        <TitlesTab IsImage title="Graphic Designer" arrowUp />
        <TitlesTab IsImage title="Project Manager" arrowUp />
        <TitlesTab IsImage title="Content Writers" arrowUp />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeamsRoles;
