import {StyleSheet, Text, Image, TextInput, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Tab = ({placeHolder, tabHeader, image,isimage,onPress}) => {
  return (
   <View styles={styles.tabview}>
      <Text style={styles.tabHeader}>{tabHeader}</Text>
      <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      {isimage && (
          <Image style={styles.imageView} source={isimage}></Image>
        )}
        <TextInput placeholder={placeHolder} style={styles.input} />
        </View>
        {image && (
          <Image style={styles.imageView} source={image}></Image>
        )}
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width:122,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal:15,
    justifyContent:'space-between',
    margin:10
  
  },

  input: {
    color: colors.cylindertext,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  tabHeader: {
    fontSize: 12,
    color: colors.cylindertext,
    fontFamily: fonts.regular,
    paddingLeft:15
  },

  imageView: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  tabview:{
    height:60,
    width:'50%',
}
});
