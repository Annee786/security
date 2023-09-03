import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Input = ({
  placeHolder,
  isEye,
  isEmail,
  isUser,
  isPhone,
  tabHeader,
  blackHeader,
  isArrowdown,
  mapin,
  locate,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.tabHeader,
          {
            color: blackHeader ? colors.black : colors.grey,
            fontSize: blackHeader ? 14 : 16,
          },
        ]}>
        {tabHeader}
      </Text>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={''}
          placeholder={placeHolder}
          style={[
            styles.input,
            {
              fontSize: blackHeader ? 12 : 14,
            },
          ]}
        />
        {mapin && (
          <Image
            style={[
              styles.imageView,
              {
                tintColor: mapin ? colors.blue : colors.black,
              },
            ]}
            source={images.mappin}></Image>
        )}
        {isArrowdown && (
          <Image style={styles.imageView} source={images.down}></Image>
        )}

        {isEye && <Image style={styles.imageView} source={images.eye}></Image>}

        {isEmail && (
          <Image style={styles.imageView} source={images.mail}></Image>
        )}
        {isUser && (
          <Image style={styles.imageView} source={images.user}></Image>
        )}
        {isPhone && (
          <Image style={styles.imageView} source={images.phone}></Image>
        )}
 {locate && (
          <Image style={styles.imageView} source={images.locatefixed}></Image>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey,
    backgroundColor: colors.white,
    height: 50,
    width: '90%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  input: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  tabHeader: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: fonts.medium,
    paddingVertical: 15,
    paddingLeft: 20,
  },

  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.grey,
    margin: 10,
  },
});
