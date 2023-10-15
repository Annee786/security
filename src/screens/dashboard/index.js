import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import HomeScreenHeader from '../../components/homeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';

const Accounts = [
  {
    image: images.Ronald,
    user: 'Jacob Jones',
    time: 'Added 20 mins ago',
  },
  {
    image: images.Esther,
    user: 'Jenny Wilson',
    time: 'Added 48 mins ago',
  },
  {
    image: images.Darell,
    user: 'Darrell Steward',
    time: 'Added 1 hours ago',
  },
  {
    image: images.Theresa,
    user: 'Theresa Webb',
    time: 'Added 2 hours ago',
  },
];

const Details = [
  {
    image: images.supervisoraccount,
    usermenu: 'User Accounts',
  },
  {
    image: images.postadd,
    usermenu: 'Post Job',
  },

  {
    image: images.mappin,
    usermenu: 'Add Venue',
  },
  {
    image: images.calenderdays,
    usermenu: 'Job Calendar',
  },
  {
    image: images.circledollarsign,
    usermenu: 'Payment History',
  },
];
const renderDetails = ({item}) => {
  return (
    <View style={styles.userView}>
      <View style={styles.jobView}>
        <Image style={styles.imageView} source={item.image}></Image>
      </View>
      <Text style={styles.jobdetail}>{item.usermenu}</Text>
    </View>
  );
};
const renderItem = ({item}) => {
  return (
    <View style={styles.accountsView}>
      <View style={styles.userimageView}>
        <Image style={styles.userimage} source={item.image} />
        <View style={styles.nameview}>
          <Text style={styles.username}>{item.user}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.detailView}>
        <Text  style={styles.detail}>View Details</Text>
      </View>
    </View>
  );
};
const DashBoard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <HomeScreenHeader
        heading="Welcome Back"
        subheading="Jack Deosan"
        bell
        message
      />
      <FlatList renderItem={renderDetails} data={Details} numColumns={5} />
      <BreadCrum heading="Recent Added Accounts " subheading="View All" />
      <FlatList renderItem={renderItem} data={Accounts} />
      <BreadCrum heading="Create Job Post " />
      <TouchableOpacity  onPress={() => navigation.navigate('EmployeeAccount')} style={styles.add}>
        <Image style={styles.plusimage} source={images.plusCircle} />
        <Text  style={styles.newpost}>Add New Posts</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashBoard;
