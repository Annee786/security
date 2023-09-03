import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Cylinder = ({
  heading,
  onPress,
  isBlue,
  isred,
  imageinblue,
  imageingrey,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
         
          backgroundColor: isBlue ? colors.blue :isred ? colors.white :
            imageingrey ? colors.cylinder : colors.white,
          borderColor:isBlue ? colors.blue :isred ? colors.red :
           imageingrey ? colors.cylinder : colors.white,}
         
        
      ]}>
      {imageinblue && (
        <Image style={styles.checkcircle} source={images.checkcircle}></Image>
      )}
      {imageingrey && (
        <Image style={styles.checkcircle} source={images.checkcircle}></Image>
      )}
      <Text
        style={[
          styles.inputText,
          {
            color: isBlue ? colors.white :
            imageingrey ? colors.cylinder: 
            isred ? colors.red :colors.white,
         
            paddingLeft:imageingrey ? 5:10,
          },
        ]}>
        {heading}
      </Text>
    </TouchableOpacity>
  );
};

export default Cylinder;

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row',
    width: '45%',
    marginTop: 25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginLeft: 10,
  },
  inputText: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.blue,
  },
  checkcircle: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});
