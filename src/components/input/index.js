import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Input = ({
  placeHolder,
  inputHeading,
  showArrowButton,
  isPassword,
  isEmail,
  showTime,
  showArrowUp,
  search,
  describeMore,
  
}) => {
  return (
 
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={''}
          placeholder={placeHolder}
          style={styles.input}
        />
        {showArrowButton && (
          <Image style={styles.eyeimage} source={images.pushArrow}></Image>
        )}
        {isPassword && (
          <Image style={styles.eyeimage} source={images.eyeImage}></Image>
        )}
        
        {isEmail && <Text style={styles.emailText}>Email</Text>}
        {showTime && <Text style={styles.timeText}>hours</Text>}
        {showArrowUp && (
          <Image style={styles.eyeimage} source={images.pushArrowUp}></Image>
        )}
        {search && (
          <Image style={styles.eyeimage} source={images.searchImage}></Image>
        )}
        {describeMore && (
          <Image style={styles.moreimage} source={images.moreImage}></Image>
        )}
   
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.lightgrey,
    backgroundColor: colors.lightgrey,
    height: 60,
    width: '100%',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  text: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: fonts.medium,
  },
  inputBox: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  eyeimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  emailText: {
    fontFamily: fonts.light,
    fontSize: 10,
    color: colors.grey,
  },
  timeText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.darkgrey,
  },
  moreimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    margin: 10,
  },
  image:{
    height: 20,
    width: 20,
    resizeMode: 'contain',
  }
});
