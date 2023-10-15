import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, images} from '../../utils';

const Input = ({placeHolder, tabHeader, image, isimage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textimageView}>
        {image && <Image style={styles.imageView} source={image}></Image>}
        <View style={{padding:11,
    
}}>
          <Text style={styles.tabHeader}>{tabHeader}</Text>
          <TextInput
            placeholderTextColor={''}
            placeholder={placeHolder}
            style={styles.input}
          />
        </View>
      </View>
      {isimage && <Image style={styles.eyeimage} source={isimage}></Image>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.border,
    height: 60,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    
  },
  input: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color:colors.blue,
  },
  tabHeader: {
    fontSize: 12,
    color: colors.graydark,
    fontFamily: fonts.light,
    paddingLeft:5

  },

  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  eyeimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  textimageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
