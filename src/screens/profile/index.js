import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {colors, images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import {FlatList} from 'react-native';

const Category = [
  {
    image: images.showerhead,
    text: 'My Jobs',
  },
  {
    image: images.mappin,
    text: 'Location',
  },
  {
    text: 'Subscription',
  },
  {
    image: images.starblue,
    text: 'Ratings & Reviews',
  },
  {
    image: images.bellicon,
    text: 'Push Notifications',
  },
  {
    image: images.settings,
    text: 'Settings',
  },
  {
    image: images.folderlock,
    text: 'Privacy & Policy',
  },
  {
    image: images.filetext,
    text: 'Terms & Conditions',
  },
  {
    image: images.logout,
    text: 'Log out',
  },
];

const renderItem = ({item,index}) => {
  return (
    <View style={[styles.profileView,{
      borderBottomWidth:index == 2 ? 1: index ===5 ?1 :0,
      borderColor:colors.cylinder
    }]}>
      <Image style={styles.imageView} source={item.image}></Image>
      <View style={styles.jobsView}>
        <Text style={styles.jobs}>{item.text}</Text>
      </View>

      <Image style={styles.arrow} source={images.leftarrowIcon}></Image>
    </View>
  );
};
const Profile = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Profile" />
      <View style={styles.profile}>
        <Image style={styles.pic} source={images.mariumKhalid}></Image>
        <View style={styles.nameView}>
          <Text style={styles.name}>Marium Khalid</Text>
          <Text style={styles.emailId}>Mariumkhalid@gmail.com</Text>
          <View style={styles.editTab}>
            <Text style={styles.edit}>Edit Profile</Text>
          </View>
        </View>
      </View>
      <FlatList renderItem={renderItem} data={Category} />
    </SafeAreaView>
  );
};

export default Profile;
