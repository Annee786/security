import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const MarkCuban = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.mark} source={images.MarkCuban} />
      <View style={styles.nameView}>
        <Text style={styles.mainheading}>Mark Cuban</Text>
        <Text style={styles.title}>Graphic Designer</Text>
        <Text style={styles.weeks}>Availability : 30 Hrs/week </Text>
        <View style={styles.locationView}>
          <Image style={styles.locationImage} source={images.location} />
          <Text style={styles.location}>San Diego, CA</Text>
        </View>
      </View>
      <Image style={styles.copy} source={images.copy} />
    </View>
  );
};

export default MarkCuban;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mainheading: {
    color: colors.lightblack,
    fontSize: 18,
    fontFamily: fonts.bold,
    paddingLeft: 10,
  },
  mark: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  title: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.medium,
    paddingLeft: 10,
  },
  weeks: {
    color: colors.grey,
    fontSize: 10,
    fontFamily: fonts.light,
    paddingLeft: 10,
  },
  location: {
    color: colors.grey,
    fontSize: 10,
    fontFamily: fonts.light,
    paddingLeft: 5,
  },
  copy: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  locationImage: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
  },
  locationView: {flexDirection: 'row',
   alignItems: 'center',
   paddingLeft: 10},

   nameView:
   {flexDirection: 'column',
    justifyContent: 'space-between'}
});
