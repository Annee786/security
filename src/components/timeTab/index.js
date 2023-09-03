import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const TimeTab = ({placeHolder, tabHeader, istime, isclock}) => {
  return (
    <View style={styles.pageview}>
      <Text style={styles.tabHeader}>{tabHeader}</Text>
      <View style={styles.container}>
        {isclock && (
          <Image style={styles.imageView} source={images.clock1}></Image>
        )}
        {istime && (
          <Image style={styles.imageView} source={images.calendar}></Image>
        )}

        <TextInput placeholder={placeHolder} style={styles.input} />
      </View>
    </View>
  );
};

export default TimeTab;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderColor: colors.grey,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },

  input: {
    color: colors.grey,
    fontSize: 14,
    fontFamily: fonts.medium,
    paddingLeft:30
  },
  tabHeader: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.medium,
  paddingVertical:10
  },

  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.blue,
marginLeft:10
  },
  pageview:{
    height: 100,
    width:150,
    marginLeft:20
  }
});
