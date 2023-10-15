import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const JobHeader = ({heading, addtab,tintColor,white}) => {
  return (
    <View style={styles.container}>
     <Image style={[styles.imageView,{color:tintColor?colors.white:colors.white}]}
     source={images.arrowLeft} />
      <Text style={[styles.mainheading,{color:white}]}>{heading}</Text>
      {addtab ? 
        <View style={styles.addtab}>
          <Image style={styles.plusimage} source={images.plus} />
          <Text style={styles.addText}>Add New</Text>
          </View> :
            <View>
            <Text style={styles.addText}></Text>
            </View>
          }
         
  
    </View>
  );
};

export default JobHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  mainheading: {
    color: colors.breadcrum,
    fontSize: 16,
    fontFamily: fonts.bold,
  },

  imageView: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
  plusimage: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    tintColor:colors.white
  },
  addText: {
    color: colors.white,
    fontSize: 9,
    fontFamily: fonts.light,
    margin:5
  },
  addtab: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 80,
    borderColor: colors.blue,
    backgroundColor:colors.blue,
    borderRadius: 15,
    justifyContent: 'center',
  },
});
