import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';

const Button = ({heading, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.inputText}>{heading}</Text>
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
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,}

});
