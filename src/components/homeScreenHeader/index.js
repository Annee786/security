import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';

const Header = ({heading, 
  subheading,
  danial,
  marium}) => {
  return (
    <View style={styles.container}>
<View style={{flexDirection:'column',justifyContent:'space-between',}}>
      <Text style={styles.mainheading}>{heading}</Text>
      <Text style={styles.subheading}>{subheading}</Text>

      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image style={styles.bellimage} source={images.bellblue}></Image>
      {danial && (
          <Image style={styles.imageView} source={images.danial}></Image>
        )}
 {marium && (
          <Image style={styles.imageView} source={images.mariumKhalid}></Image>
        )}
      </View>
      </View>
   
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    height:70,
    width:'100%'
  },
  mainheading: {
    alignItems: 'center',
    color: colors.grey,
    fontSize: 16,
    fontFamily: fonts.bold,
    
  },
  subheading:{
    alignItems: 'center',
    color: colors.black,
    fontSize: 22,
    fontFamily: fonts.bold,
  

  },

hand: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  imageView:{
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },

  bellimage:{
    height: 30,
    width: 30,
    resizeMode: 'contain',
}


});
