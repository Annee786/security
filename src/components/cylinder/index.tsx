import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Cylinder = ({heading, onPress, color, borderColor, textcolor,  image,}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: color,
          borderColor: borderColor,
        },
      ]}>
         {image && <Image style={styles.imageView} source={image}></Image>}
      <Text
        style={[
          styles.inputText,
          {
            color: textcolor,
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
    height: 50,
    flexDirection: 'row',
    width: '45%',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'flex-start',
    paddingHorizontal:10,
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
  imageView:{
    height: 20,
    width: 20,
    resizeMode: 'contain',
    margin:10
  }
});
