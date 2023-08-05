import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const BreadCrum = ({heading, seeTab}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{heading}</Text>
      {seeTab && (
        <View style={styles.seeView}>
          <ImageBackground
            style={styles.rectangleimage}
            source={images.Rectangle}>
            <Text style={styles.seeAllText}>See All</Text>
          </ImageBackground>
        </View>
      )}
    </View>
  );
};

export default BreadCrum;

const styles = StyleSheet.create({
  mainHeading: {
    alignItems: 'center',
    fontFamily: fonts.semiBold,
    color: colors.lightblack,
    fontSize: 16,
  },

  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  seeView: {
    justifyContent: 'center',
    height: 40,
    width: 50,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.light,
    color: colors.grey,
    fontSize: 10,
  },
  rectangleimage: {
    height: 20,
    width: 45,
    resizeMode: 'center',
  },
  seeAllText: {
    fontFamily: fonts.light,
    fontSize: 8,
    color: colors.darkshade,
    alignSelf: 'center',
  },
});
