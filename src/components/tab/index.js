import {StyleSheet, Text,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Tab = ({
  input, 
  onPress,
  listing,
  record,
  transparent,
  link,
  date,
  grey,
  offwhite
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,{
      backgroundColor:transparent? 'transparent' : colors.lightblue,
      borderColor:transparent?colors.jetblack:colors.lightblue,
      borderWidth:1,
      borderColor:grey?colors.lightgrey:colors.lightblue,
      backgroundColor:grey?colors.lightgrey : colors.lightblue,
      borderColor:offwhite?colors.offWhite:colors.lightblue,
      backgroundColor:offwhite?colors.offWhite:colors.lightblue,

    }]}>
       {link && (
        <Image style={styles.moreimage} source={images.Link1}></Image>
      )}
      {listing && (
        <Image style={styles.moreimage} source={images.Link}></Image>
      )}
        {record && (
        <Image style={styles.moreimage} source={images.record}></Image>
      )}
       {date && (
        <Image style={styles.moreimage} source={images.duedate}></Image>
      )}
      <Text style={[styles.inputText,{
        color:transparent?colors.jetblack:colors.white,
        color:grey?colors.grey:colors.white,
        color:offwhite?colors.jetblack:colors.white,

      }]}>{input}</Text>

      
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '40%',
    borderColor: colors.lightblue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginLeft:20,
    flexDirection:'row'
  },
  inputText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.white,
    padding:5
  },
  moreimage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',

  },
});
