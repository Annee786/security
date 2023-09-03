import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const JobHeader = ({heading, isblue, bell}) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowView}>
        <Image style={styles.imageView} source={images.leftarrow} />
      </View>
      <Text
        style={[
          styles.mainheading,
          {
            color: isblue ? colors.blue : colors.black,
          },
        ]}>
        {heading}
      </Text>
      {bell ? <Image style={styles.picture} source={images.bellicon}/>:
      <Image style={styles.picture}/>}
    </View>
  );
};

export default JobHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  mainheading: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.bold,
    paddingHorizontal: 10,
  },

  imageView: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
  picture: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  arrowView: {
    height: 45,
    width: 45,
    backgroundColor: colors.lightBlue,
    borderColor: colors.lightBlue,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});
