import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import { colors, fonts } from '../../utils';

const AddMore= ({heading,}) => {
  return (
    <View style={styles.dottedBox}>
    <Text style={styles.addmoreText}>+ Add more</Text>
  </View>
    );
};

export default AddMore;

const styles = StyleSheet.create({
    dottedBox: {
        height: 60,
        width: '90%',
        borderColor: colors.lightblack,
        borderStyle: 'dashed',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 40,
      },
      addmoreText:{
        fontFamily:fonts.regular,
        fontSize:12,
        color:colors.lightblack
      }

})