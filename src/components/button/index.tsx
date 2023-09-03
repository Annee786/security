import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Button = ({heading, onPress, isBlue, isWhite, isgrey, inImage}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isWhite ? colors.white : 
           isBlue ?colors.blue:isgrey?colors.grey:colors.white,
          borderColor: isWhite ? colors.blue :  inImage ? colors.black :
          isgrey?colors.grey:colors.white,
          borderWidth: isWhite ? 1 : inImage ? 1 : isgrey? 1: 2,
          
        },
      ]}>
      <Text
        style={[
          styles.inputText,
          {color: isWhite ? colors.blue : isBlue ? colors.white :
             isgrey ? colors.white :
             inImage ? colors.black : colors.blue},
         
        ]}>
        {inImage && (
          <Image style={styles.googleimage} source={images.google}></Image>
        )}
        {heading}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: 55,
    width: '90%',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  googleimage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
