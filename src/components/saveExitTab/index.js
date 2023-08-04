import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';

const SaveExitTab = ({
  heading,
  onPress,
  isWhite,
redButton
,}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,{
    backgroundColor:isWhite?colors.lightblue:colors.lightgrey,
    backgroundColor:redButton?colors.red:colors.lightgrey
    }]}>
      <Text style={[styles.inputText,{color:isWhite?colors.white:colors.white,
}]}>
        {heading}</Text>
    </TouchableOpacity>


  );
};

export default SaveExitTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.lightgrey,
    height: 60,
    width: '90%',
  marginTop:30,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputText: {
    color:colors.lightblack,
    fontSize: 14,
    fontFamily:fonts.MediumItalic
  },
});
