import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const TitlesTab = ({title, IsImage, arrowUp, arrowDown}) => {
  return (
    <View style={styles.container}>
      {IsImage && (
        <Image style={styles.rightimage} source={images.right}></Image>
      )}
      <TextInput
        placeholderTextColor={''}
        placeholder={title}
        style={styles.input}
      />
      {arrowUp && (
        <Image style={styles.upimage} source={images.arrowUp}></Image>
      )}
      {arrowDown && (
        <Image style={styles.upimage} source={images.downArrow}></Image>
      )}
    </View>
  );
};

export default TitlesTab;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.desciptionbox,
    backgroundColor: colors.desciptionbox,
    height: 60,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  input: {
    color: colors.lightblack,
    fontSize: 14,
    fontFamily: fonts.semiBold,
  },

  upimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  rightimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
