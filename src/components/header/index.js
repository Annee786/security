import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const Header = ({heading, subText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainheading}>{heading}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingHorizontal: 10,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:30
  },
  mainheading: {
    alignItems: 'center',
    color: colors.black,
    fontSize: 28,
    fontFamily: fonts.ExtraBold,
    paddingHorizontal: 15,
    
  },
  subText: {
    alignItems: 'center',
    color: colors.graydark,
    fontSize: 16,
    fontFamily: fonts.medium,
    paddingHorizontal: 15,
  
    
  },
});
