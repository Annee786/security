import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';

import BreadCrumbs from '../../components/breadCrumbs';
import { ImageBackground } from 'react-native';
import { FlatList } from 'react-native';

const Category = [
  {
    text: 'Liked',
    image:images.Like
  },
  {
    text: 'Tech',
    image:images.AI
  },
  {
  
    text: 'Health',
    image:images.HealthCare
  },
  {
    numbers: 'tictactoe',
    text: 'Entertainment',
    image:images.tictactoe
  },
  {
    text: 'Education',
    image:images.Education
  },
  {

    text: 'Food and Drink',
    image:images.foodDrink
  },
  {
    text: 'Real Estate',
    image:images.building
  },
  {
    text: 'Art and Design',
    image:images.designtools
  },
];
const Picture = [
  {
   image:images.murphy
  },
  {
    image:images.Conor
  },
  {
    image:images.ConorMurphy
  },
  {
    image:images.ConorMurphy
  },
  {
    image:images.ConorMurphy
  },
];

const renderItem =({item})=>{
  return (
    <View style={styles.categories}>
      <Image style={styles.imageView} source={item.image}></Image>
      <Text style={styles.categoryText}>{item?.text}</Text>
    </View>
  );
}
const Home = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.termsView}>
      <ScrollView>
        <Header alarmNotification />
        <View style={styles.tabsView}>
          <View style={styles.searchiew}>
            <Image
              style={styles.imagesearch}
              source={images.Search1}></Image>
            <Text style={styles.textsearch}>Search</Text>
          </View>
          <View style={styles.filterbox}>
            <Image style={styles.filterimage} source={images.Filter}></Image>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground style={styles.tubimage} source={images.tub}>
          <Text style={styles.findingText}>Find your future partners</Text>

          </ImageBackground>
        </View>
        <BreadCrumbs heading="Categories" seeTab />
        <FlatList
        renderItem={renderItem}
        data={Category}
        numColumns={4}
        />
       
        <BreadCrumbs heading="Nearby " seeTab />
        {Picture.map(item => {
          return (
          
        <View style={styles.nameView}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={styles.Viewimage} source={item.image}></Image>
          <View style={styles.textView}>
            <Text style={styles.name}>Conor Murphy </Text>
            <Text style={styles.title}>UI/UX designer</Text>
            <Text style={styles.place}>San Diego, California</Text>
          </View>
          </View>
        
          <View style={styles.heartView}>
            <Image style={styles.heartimage} source={images.greyHeart}></Image>
          </View>
        </View>
          );
        })}
           <BreadCrumbs heading="Virtual " seeTab/>
        {Picture.map(item => {
          return (
            <View style={styles.nameView}>
            <Image style={styles.Viewimage} source={images.Conor}></Image>
            <View style={styles.textView}>
              <Text style={styles.name}>Conor Murphy </Text>
              <Text style={styles.title}>UI/UX designer</Text>
              <Text style={styles.place}>San Diego, California</Text>
            </View>
            <View style={styles.heartView}>
              <Image style={styles.heartimage} source={images.greyHeart}></Image>
            </View>
          </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
