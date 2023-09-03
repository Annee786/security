import {StyleSheet, Text, Image,  View} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const JobItems = ({}) => {
  return (
    <View styl={styles.container}>
      <Image style={styles.imageView} source={images.tapbasinrepair}></Image>
        <Text style={styles.text}>Tap & Basin Repair</Text>
        <Text style={styles.dateText}>2/7/23 | 10:30 A.M </Text>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.$Text}>$ 230</Text>
        <Text style={styles.textView}>View Details</Text>
      </View>
    </View>
  );
};

export default JobItems;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.skyBlue,
    backgroundColor:colors.blue
  },

  imageView: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    backgroundColor:'red',
  },
  text: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.black,
    padding: 5,   

  },
  dateText: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: colors.grey,
    padding: 5,  

  },
  $Text: {
    color: colors.red,
    fontFamily: fonts.semiBold,
    fontSize: 14,  

  },
  textView: {
    color: colors.blue,
    fontFamily: fonts.medium,
    fontSize: 11, 

  },
});
