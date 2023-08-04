import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import {colors, fonts} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../tab';

const MotoMobileHeader = ({heading, alarmNotification}) => {
  return (
    <SafeAreaView>
      <View style={styles.logoView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.logoimage} source={images.LogoM}></Image>

          <View style={styles.logo}>
            <Text style={styles.logoText}>Moto Mobiles</Text>
            <Text style={styles.techText}>Tech</Text>
          </View>
        </View>

        <Image
          style={styles.shareimage}
          source={images.share}></Image>
      </View>
      <View style={styles.imageStyling}>
        <Image style={styles.imagegroup} source={images.teamImage}></Image>
      </View>
      <View style={styles.tabView}>
          <Tab listing input="Team" />
          <Tab record input="Records" transparent />
        </View>
    </SafeAreaView>
  );
};

export default MotoMobileHeader;

const styles = StyleSheet.create({
  logoView: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  logoimage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.lightblack,
  },
  shareimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  techText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightblack,
  },

  imagegroup: {
    height:'100%',
    width: '100%',
    resizeMode: 'contain',
  },
  imageStyling: {
    justifyContent: 'center',
height:230,
width:'100%',
alignSelf:'center',} ,
 logo: {flexDirection: 'column',
  paddingLeft:10},
  tabView:{
    flexDirection:'row',
    paddingVertical:20
  },
});
