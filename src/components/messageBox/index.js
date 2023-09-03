import {StyleSheet, Text, TextInput, Image, View} from 'react-native';
import React from 'react';
import {colors, images, fonts} from '../../utils';

const MessageBox = ({
  placeHolder,
  inputmessage,
  describeMore,
  arrowUp,
  textinput,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: textinput ? colors.white : colors.lightblue,
          flexDirection: 'column',
        },
      ]}>
      <TextInput
        placeholderTextColor={''}
        placeholder={placeHolder}
        style={[
          styles.input,
          {color: textinput ? colors.lightblack : colors.grey},
        ]}
      />
      {describeMore && (
        <Image style={styles.moreimage} source={images.moreImage}></Image>
      )}
      {arrowUp && (
        <Image style={styles.arrowimage} source={images.arrowUp}></Image>
      )}
      {textinput && (
        <Text
          style={[
            styles.inputText,
            {
              color: textinput ? colors.inputmessage : colors.grey,
            },
          ]}>
          {inputmessage}
        </Text>
      )}
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.lightgrey,
    backgroundColor: colors.lightgrey,
    height: 200,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    color: colors.grey,
    fontSize: 14,
    fontFamily: fonts.regular,
  },

  moreimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    margin: 10,
  },
  arrowimage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: 'black',
    paddingTop: 20,
  },
  inputText: {
    color: colors.inputmessage,
    fontSize: 12,
    fontFamily: fonts.regular,
  },
});
