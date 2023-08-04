import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';

const Button = ({heading,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.inputText}>{heading}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.lightblue,
    height: 60,
    width: '90%',
  marginTop:30,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputText: {
    color:colors.white,
    fontSize: 14,
    fontFamily:fonts.MediumItalic
  },
});
