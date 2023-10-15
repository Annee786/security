import {StyleSheet, Text, Image, TextInput, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, } from '../../utils';

const HeaderTab = ({placeHolder, tabHeader, flag, image,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <Text style={styles.tabHeader}>{tabHeader}</Text>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={''}
          placeholder={placeHolder}
          style={styles.input}
        />
        {flag && <Image style={styles.flagView} source={flag}></Image>}
        {image && <Image style={styles.imageView} source={image}></Image>}
      </View>

</TouchableOpacity>
  );
};

export default HeaderTab;

const styles=StyleSheet.create({
  container: {
    borderColor: colors.border,
    height: 50,
    width: '90%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    margin: 10,
  },
  input: {
    color: colors.cylindertext,
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  tabHeader: {
    fontSize: 12,
    color: colors.cylindertext,
    fontFamily: fonts.medium,
    paddingHorizontal: 20,
  },

  imageView: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    margin: 10,
  },

  flagView: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
});
