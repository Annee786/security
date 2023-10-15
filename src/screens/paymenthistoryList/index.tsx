import React from 'react';
import {View, Text,Image, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import { SearchBar } from 'react-native-screens';
import SearchTab from '../../components/searchTab';
import {FlatList} from 'react-native';


const jobItems = [
  {
    name:"Ralph Edwards",
    image: images.RalphEdwards,
    jobTitle: 'Nursing Assistant',
    charges: '$106.58',
  },

  {
    name:"Dianne Russell",
    image: images.dianneRussell,
    jobTitle: 'Web Designer',
    charges: '$450.54',
  },

  {
    name:"Theresa Webb",
    image: images.TWeb,
    jobTitle: 'Marketing Coordinator',
    charges: '$328.85',
  },
  
  {
    name:"Ronald Richards",
    image: images.Ronald,
    jobTitle: 'Ronald Richards',
    charges: '$630.44',
  },
  
  {
    name:"Darrell Steward",
    image: images.darrellSteward,
    jobTitle: 'Darrell Steward',
    charges: '$943.65',
  },
  
  {
    name:"Esther Howard",
    image: images.EstherHoward,
    jobTitle: 'Medical Assistant',
    charges: '$446.61',
  },
    
  {
    name:"Jacob Jones",
    image: images.EstherHoward,
    jobTitle: 'Marketing Coordinator',
    charges: '$275.43',
  },
];

const renderItem = ({item}) => {
  return (
<View style={styles.historyView}>
    <View style={styles.row}>
    <Image style={styles.picture}source={item.image}></Image>
    <View style={styles.coloumn}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.jobs}>{item.jobTitle}</Text>
    </View>
    </View>
    <View style={styles.coloumn}>
    <Text style={styles.charges}>{item.charges}</Text>
    <Text style={styles.total}>Total Earning</Text>
    </View>
</View>
    );
};

const PaymentHistoryList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
<JobHeader heading="Payment History" />
<ScrollView>
<SearchTab  onPress={() => navigation.navigate('PaymentHistory')} image={images.search} heading="Search by name"/>

<FlatList renderItem={renderItem} data={jobItems} />
</ScrollView>
</SafeAreaView>
  );
};

export default PaymentHistoryList;