import React from 'react';
import {View, Image, Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import HomeScreenHeader from '../../components/homeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';

const jobs=[
    {
        image:images.history,
        text:"Job Requests",
    },
    {
        image:images.briefcase,
        text:"My Jobs",
    },
    {
        image:images.calenderdays,
        text:"My Calendar",
    },  {
        image:images.circledollarsign,
        text:"My Earnings",
    },  {
        image:images.calendarclock,
        text:"My Activity",
    },
];
const Log = [
    {
        company:"Barron LLC",
      clock: 'Check-in',
      time: '9:15 am',
    },
    {
        company:"Barron LLC",
      clock: 'Clock-out',
      time: '6:30 pm',
    },
    {
        company:"Falcon Ware House",
      clock: 'Check-in',
      time: '7:12 pm',
    },
 
  ];
  const renderitem = ({item}) => {
    return (
      <View style={styles.clockView}>
        <View style={styles.imagetextView}>
          <Image style={styles.loginview} source={images.login}></Image>
          <View style={styles.textView}>
            <Text style={styles.clocktext}>{item.clock}</Text>
            <Text style={styles.venu}>{item.company}</Text>
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.timetext}>{item.time}</Text>
          <Text style={styles.date}>Date : 09/10/2003</Text>
        </View>
      </View>
    );
  };
  
const renderjob = ({item,navigation}) => {
    return (
               <TouchableOpacity  onPress={() => navigation.navigate('JobRequest')} style={styles.dashboardview}>
        <View style={styles.circle}>
          <Image style={styles.imageview} source={item.image}></Image>
        </View>
        <Text style={styles.jobstext}>{item.text}</Text>
      </TouchableOpacity>

    );
}
const DashBoardEmployee = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <HomeScreenHeader
        Robert
        heading="James Robert"
        subheading="24 Aug, 2023"
        bell
        message
      />
      <BreadCrum heading="Dashboard" />
      <FlatList 
      contentContainerStyle={{marginHorizontal:10}}
      numColumns={2} renderItem={renderjob} data={jobs}  />
      <BreadCrum heading="Recent Activity" />
      <FlatList renderItem={renderitem} data={Log} 
     />

    </SafeAreaView>
  );
};

export default DashBoardEmployee;
