import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/input';
import BreadCrum from '../../components/breadCrumbs';
import Tab from '../../components/tab';
import TitlesTab from '../../components/titlesTab/indes';

const EditRole = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Edit Role" />
      <TitlesTab title="Graphic Designer" />
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue
          nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit amet
          porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus egestas,
          risus a bibendum. Integer a nibh feugiat, congue nunc ac, auctor
          tortor. Nam luctus libero sed tortor luctus, sit amet porttitor ex
        </Text>
      </View>
      <BreadCrum heading="Skills" />
      <BreadCrum heading="Role type" />
      <View style={styles.tabsView}>
        <Tab grey input="In Person" offwhite />
        <Tab grey input="Online" />
      </View>
      <View style={styles.tabsView}>
        <Tab grey input="Cancel" offwhite />
        <Tab grey input="Update" />
      </View>
    </SafeAreaView>
  );
};

export default EditRole;
