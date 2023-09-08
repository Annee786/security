import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts, images} from '../../utils';

const BreadCrum = ({heading, isimage,
   subheading,
   isBlue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{heading}</Text>
      <View style={styles.imageView}>
        {isimage && (
          <Image style={styles.plusimage} source={images.pluscircle}></Image>
        )}
        {isimage && <Text style={styles.subHeading}>{subheading}</Text>}
      </View>
      <Text
        style={[
          styles.inputText,
          {
            color: isBlue ? colors.white:colors.blue }
        ]}>
        {subheading}
      </Text>
    </View>
  );
};

export default BreadCrum;

const styles = StyleSheet.create({
  mainHeading: {
    fontFamily: fonts.semiBold,
    color: colors.black,
    fontSize: 16,
  },

  container: {
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  subHeading: {
    fontFamily: fonts.semiBold,
    color: colors.black,
    fontSize: 14,
    paddingLeft: 5,
  },
  imageView: {
    flexDirection: 'row',
  },
});
