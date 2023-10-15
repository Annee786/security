import React from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import styles from './styles';
import {colors, images} from '../../utils';
import JobHeader from '../../components/jobHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';
const list = [
  {
    image: images.cathouse,
    name: 'Falcon Warehouse',
    charges: '$120.00',
  },
  {
    image: images.helpinghand,
    name: 'Helping Hands',
    charges: '$275.00',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.listView}>
      <View style={styles.imagetext}>
        <Image style={styles.company} source={item.image}></Image>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.imagetext}>
        <Text style={styles.charges}>{item.charges}</Text>
        <Image style={styles.right} source={images.rightarrow}></Image>
      </View>
    </View>
  );
};

const PaymentHistory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ImageBackground style={styles.background} source={images.background}>
        <JobHeader
          heading="Payment History"
          tintColor={colors.white}
          white={colors.white}
        />
       
      </ImageBackground>
      <View style={styles.paymentbox}>
          <Text style={styles.total}>$450.54</Text>
          <Text style={styles.totalearn}>Total Earning</Text>
          <View style={styles.row}>
            <View style={styles.imagetext}>
              <Image style={styles.diane} source={images.dianneRussell}></Image>
              <Text style={styles.dianename}>Dianne Russell</Text>
            </View>
            <Text style={styles.id}>Dianne@gmail.com</Text>
          </View>
        </View>
      <BreadCrum heading="Companies List" />
      <FlatList renderItem={renderItem} data={list} />
    </SafeAreaView>
  );
};

export default PaymentHistory;
