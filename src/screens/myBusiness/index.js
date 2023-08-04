import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
const dealsArray = [
  {
   image: 'eyeImage',
   opttions:'Business'
  },
  {
    image: 'eyeImage',
    opttions:'Find'
  },
  {
    image: 'eyeImage',
    opttions:'Explore'
  },
  {
    image: 'eyeImage',
    opttions:'Chats'
  },
  {
    image: 'eyeImage',
    opttions:'Profile'
  },
];

const MyBusiness = ({navigation, onPress}) => {

  return (
    <SafeAreaView style={styles.myBusinessView}>
<View style={styles.heading}>
  <Text style={styles.headingText}>Business</Text>

      <View style={styles.Polygon}>
      <Image style={styles.polygonimage}source={images.polygon}></Image>

      <Image style={styles.plusimage}source={images.plusimage}></Image>
      </View>
      </View>
      <View style={styles.businessBox}>
        <Text style={styles.text}>
          Click on to start building your business
        </Text>
        <Image style={styles.polygonimage}source={images.polygon}></Image>
        <Image style={styles.plusimage}source={images.plusimage}></Image>
        </View>
      {dealsArray.map((item)=>{
        return(
      <View style={styles.optionBox}>
<Image style={styles.imagesView}source={images.item}></Image>
<Text style={styles.optionText}>{item.options}</Text>

      </View>
         )
      })}
    </SafeAreaView>
  );
};

export default MyBusiness;
