import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import { colors, fonts } from '../../utils';

const BreadCrum= ({heading,}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.mainHeading}>{heading}</Text>
     
    </View>
  );
};

export default BreadCrum;

const styles = StyleSheet.create({
  mainHeading: {
    alignItems: 'center',
fontFamily:fonts.semiBold,
color:colors.lightblack,
    fontSize: 16,
  },  

  container: {
    flexDirection: 'row',
    marginBottom:10,
    alignItems: 'center',
    marginTop:20,
    justifyContent:'space-between',
    marginHorizontal:20
  },
});
