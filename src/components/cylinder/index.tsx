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
  mapinblue,
  locateingrey,
  doorclosedingrey
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
         
          backgroundColor: isBlue ? colors.blue :isred ? colors.white :
            imageingrey ? colors.cylinder :imageinblue?colors.blue: 
            mapinblue?colors.blue:
            locateingrey?colors.chatbox:
            doorclosedingrey?colors.chatbox:colors.black,
          borderColor:isBlue ? colors.blue :isred ? colors.red :
           imageingrey ? colors.cylinder : colors.white,}
         
        
      ]}>
      {imageinblue && (
        <Image style={styles.checkcircle} source={images.checkcircle}></Image>
      )}
      {imageingrey && (
        <Image style={styles.checkcircle} source={images.checkcircle}></Image>
      )}
       {mapinblue && (
        <Image style={styles.checkcircle} source={images.mappin}></Image>
      )}
         {locateingrey && (
        <Image style={styles.checkcircle} source={images.locatefixed}></Image>
      )}
          {doorclosedingrey && (
        <Image style={styles.checkcircle} source={images.doorclosed}></Image>
      )}
      <Text
        style={[
          styles.inputText,
          {
            color: isBlue ? colors.white :
            imageingrey ? colors.white: 
            isred ? colors.red :
            imageinblue?colors.white:
            mapinblue?colors.white:
            locateingrey?colors.black:
            doorclosedingrey?colors.black:colors.blue,
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
