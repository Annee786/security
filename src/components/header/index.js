import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const Header = ({heading, subText
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageView} source={images.Pattern} />

      <Text style={styles.mainheading}>{heading}</Text>
      <Text style={styles.subText}>{subText}</Text>

     
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingBottom:30,
paddingHorizontal:10
  },
  mainheading: {
    alignItems: 'center',
    color: colors.black,
    fontSize: 28,
    fontFamily: fonts.bold,
    paddingHorizontal: 15,
  },

  imageView: {
    resizeMode: 'contain',
    height: 200,
    width:'100%',
  },
  subText:{
    alignItems: 'center',
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.medium,
    paddingHorizontal: 15,
  }




});
