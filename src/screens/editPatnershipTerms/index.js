import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';
import AddMore from '../../components/addMore';

const EditPatnershipRoles = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Edit Partnership Terms" />
      <View style={styles.termsTab}>
        <Text style={styles.termsText}>Use our recommended terms</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.input}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue
          nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit amet
          porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus egestas,{' '}
        </Text>
      </View>
      <AddMore/>
    </SafeAreaView>
  );
};

export default EditPatnershipRoles;
