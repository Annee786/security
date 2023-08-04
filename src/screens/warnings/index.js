import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';
import BreadCrum from '../../components/breadCrumbs';
import SaveExitTab from '../../components/saveExitTab';

const Warnings = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="Warnings" />
      <View style={styles.markView}>
        <Image style={styles.markImage} source={images.Mark}></Image>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.mark}>Mark</Text>
          <Text style={styles.postion}>Graphic Designer</Text>
        </View>
        <View style={styles.chatBox}>
          <Text style={styles.chat}>Chat</Text>
        </View>
      </View>
      <View style={styles.warnings}>
        <Text style={styles.warningsText}>Number of warnings</Text>
        <View style={styles.numbersView}>
          <Text style={styles.text}>2</Text>
          <Image style={styles.warningImage} source={images.warnings}></Image>
        </View>
      </View>
      <BreadCrum heading="Reason of warning" />
      <View style={styles.reasonBox}>
        <Text style={styles.reasonText}>
          Describe the issue clearly and how to solve it
        </Text>
      </View>
<redButton SaveExitTab heading="Send warning"/>
    </SafeAreaView>
  );
};

export default Warnings;
