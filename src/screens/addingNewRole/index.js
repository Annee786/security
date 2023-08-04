import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';

const AddNewRole = ({navigation, onPress}) => {
    return (
      <SafeAreaView style={styles.pageView}>
        <Header heading="Team" />
        </SafeAreaView>
  );
};

export default AddNewRole;