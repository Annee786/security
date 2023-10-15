import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const HomeScreenHeader = ({heading, subheading, bell, message, Robert}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:"center",}}>
      {Robert &&(
        <Image style={styles.robertimage} source={images.jamesRobert}></Image>
      )}

      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        {Robert ? 
          <Text
            style={[
              styles.mainheading,
              {fontSize: 15, fontFamily: fonts.ExtraBold, color: colors.black,paddingLeft:10},
            ]}>
            {heading}
          </Text> : <Text
            style={ styles.mainheading}>
            {heading}
          </Text>
        }
        {Robert ?
          <Text
            style={[
              styles.subheading,
              {fontSize: 12, fontFamily: fonts.light, color: colors.grey,paddingLeft:10},
            ]}>
            {subheading}
          </Text>: <Text
            style={
              styles.subheading}>
              {subheading}
            </Text>
      }
      </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {bell && <Image style={styles.bellimage} source={images.bell}></Image>}
        {message && (
          <View style={styles.circle}>
            <Image
              style={styles.imageView}
              source={images.messagecircle}></Image>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    width: '100%',
    paddingBottom: 10,
  },
  mainheading: {
    alignItems: 'center',
    color: colors.graydark,
    fontSize: 15,
    fontFamily: fonts.semiBold,
  },
  subheading: {
    alignItems: 'center',
    color: colors.breadcrum,
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  imageView: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },

  bellimage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    margin: 5,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  robertimage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
