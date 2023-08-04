import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../../components/tab';
import MotoMobileHeader from '../../components/motoMobilesHeader';
const BusinessPlanPDF = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header heading="Moto Mobiles" />
        <View style={styles.shadowView} />
        <MotoMobileHeader />
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Business Plan</Text>
        </View>
        <View style={styles.pdfView}>
          <Image style={styles.imagepdf} source={images.documentPdf}></Image>
          <Text style={styles.pdftext}>Download in PDF</Text>
        </View>
        <View style={styles.tabsView}>
          <Tab input="Delete" />
          <Tab input="Upload New" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessPlanPDF;
