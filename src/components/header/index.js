import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const Header = ({heading, 
  alarmNotification,
recordBox}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.backarrow} source={images.ArrowBack} />

      <Text style={styles.mainheading}>{heading}</Text>
      {alarmNotification? (
        <View style={styles.blackCircle}>
          <Image style={styles.picture} source={images.notification}></Image>
        </View>
      ):
      <Image style={styles.backarrow} />
    
    }
     {recordBox && (
        <Image style={styles.picture} source={images.recordBox}></Image>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:50
  },
  mainheading: {
    alignItems: 'center',
    color: colors.jetblack,
    fontSize: 15,
    fontFamily: fonts.bold,
    paddingHorizontal: 10,
  },

  backarrow: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    tintColor:"black"
  },
  picture: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  blackCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    backgroundColor: colors.lightblack,
    borderRadius: 15,
  },
 


});
