import React from 'react';
import {View, Text,Image, TouchableOpacity, } from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import JobHeader from '../../components/jobHeader';
const Venue=[
    {
        image:images.cathouse,
        name:'The Cat house',
        email:'cathouse@info.com'
    },
    {
        image:images.garage,
        name:'Garage House',
        email:'garagehouse@info.com'
    },
    {
        image:images.companyname,
        name:'DM’s Car Parking',
        email:'carparking@info.com'
    },
    {
        image:images.plumbing,
        name:'Kings Plumber House',
        email:'kingplumber@info.com'
    },
    {
        image:images.foodstation,
        name:'Food Station',
        email:'foodstation@info.com'
    },
    {
        image:images.hummingbird,
        name:'Humming Birds',
        email:'hummingbird@info.com'
    },
];

const renderItem = ({item,navigation}) => {
    return (
<TouchableOpacity  onPress={() => navigation.navigate('AddnewVenue')}  style={styles.venueView}>
<Image style={styles.venueimages}source={item.image}></Image>
<View style={styles.textView}>
<Text style={styles.venuname}>{item.name}</Text>
<Text style={styles.id}>{item.email}</Text>
</View>
<View style={styles.circle}>
<Image  style={styles.phone}source={images.phone}></Image>
</View>
</TouchableOpacity>
  );
};

const VenueList = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <View style={styles.topview}>
<JobHeader heading="Add Venue" addtab />
<FlatList renderItem={renderItem} data={Venue} />

</View>
</SafeAreaView>
  );
};

export default VenueList;