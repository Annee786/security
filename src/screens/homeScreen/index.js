import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import HomeScreenHeader from '../../components/homeScreenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import {FlatList} from 'react-native';

 const card=[
  {
    image:images.johnClark,
    name:'John Clark',
    charges:'Price : $ 450'
  },
  {
    image:images.john,
    name:'John Clark',
    charges:'Price : $ 450'
  },
 ]
const jobItems = [
  {
    image: images.tapbasinrepair,
    jobTitle: 'Tap & Basin Repair',
    date: '2/7/23 | 10:30 A.M ',
    charges: '$ 230',
  },

  {
    image: images.washbasin,
    jobTitle: 'Wash basin installation',
    date: '19/7/23 | 10:30 A.M ',
    charges: '$ 420',
  },

  {
    image: images.shower,

    jobTitle: 'Bath shower fitting',
    date: '1/8/23 | 10:30 A.M  ',
    charges: '$ 230',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageView} source={item.image}></Image>
      <View style={styles.jobstextView}>
        <Text style={styles.jobtitle}>{item.jobTitle}</Text>
        <View style={styles.imagedateView}>
          <Image
            style={styles.calenderimage}
            source={images.calendarclock}></Image>

          <Text style={styles.dateText}>{item.date} </Text>
        </View>
      </View>
      <View style={styles.jobstextView2}>
        <Text style={styles.$Text}>{item.charges}</Text>
        <Text style={styles.textView}>View Details</Text>
      </View>
    </View>
  );
};


const renderCard = ({item}) => {
  return (
    <View style={{flexDirection:'row'}}>  
        <View style={styles.cardsView}>
    <View style={styles.textimageview}>
      <View style={styles.nameimage}>
        <View style={styles.whiteback}>
          <Image
            style={styles.johnimage}
            source={item.image}></Image>
        </View>
        <Text style={styles.john}>{item.name}</Text>
      </View>
      <Text style={styles.verify}>Verified</Text>
    </View>
    <View style={styles.priceView}>
    <Text style={styles.price}>{item.charges}</Text>
    <View style={styles.checktext}>        
    <Image style={styles.check} source={item.image}></Image>
        <Text style={styles.price}>Job Completed</Text>
        </View>

    </View>
  </View>
  </View>

  );
};
const HomeScreen = ({}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <HomeScreenHeader heading="Welcome Back!" subheading="Marium 👋" />
      <ScrollView>
        <View style={styles.exploreBox}>
          <View style={styles.textImageView}>
            <Text style={styles.lookingText}>What are you looking for?</Text>
            <Text style={styles.text}>
              We help you to find perfect plumber.
            </Text>
            <View style={styles.exploreTab}>
              <Text style={styles.explore}>Explore</Text>
            </View>
          </View>
          <Image style={styles.boyImage} source={images.boy}></Image>
        </View>

        <BreadCrum heading="Recommended Plumbers" />
               <FlatList renderItem={renderCard} data={card} />

        <BreadCrum heading="My Jobs" isimage subheading="Create Job" />
        <FlatList renderItem={renderItem} data={jobItems} />
      </ScrollView>
      <View style={styles.navebar}>
        <Image style={styles.image} source={images.home1}></Image>
        <Image style={styles.image} source={images.message}></Image>
        <Image style={styles.image} source={images.pluscircle}></Image>
        <Image style={styles.image} source={images.user}></Image>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
