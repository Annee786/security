import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, fonts, images} from '../../utils';

const BreadCrum = ({heading,
   subheading,
   filtertab,
   activitytab,
   selectdate,
   navigation
   }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{heading}</Text>
      <View style={styles.imageView}>
       
      
      <Text
        style={
          styles.subheading
        }>
        {subheading}
      </Text>
      </View>
      {filtertab && (
        <View style={styles.tabView}>
          <Image style={styles.filter} source={images.filter}></Image>
          <Text style={styles.filtertext}>Filter by</Text>

          </View>
        )}
            {activitytab && (
        <TouchableOpacity  onPress={() => navigation.navigate('ActivityLog')} style={styles.tabView}>
          <Text style={styles.filtertext}>{activitytab}</Text>

          </TouchableOpacity>
        )}
        {
        selectdate && (
          <View style={styles.selectView}>
          <Text style={styles.datetext}>Select Date</Text>
          <Image style={styles.filter} source={images.calenderdays}></Image>

          </View>
        )
        }
    </View>
  );
};

export default BreadCrum;

const styles = StyleSheet.create({
  mainHeading: {
    fontFamily: fonts.semiBold,
    color: colors.breadcrum,
    fontSize: 14,}
,
  container: {
    marginBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
      alignItems: 'center',
    paddingBottom:10,
      paddingVertical:20
  },

  subheading: {
    fontFamily: fonts.semiBold,
    color: colors.blue,
    fontSize: 11,
  
  },
tabView:{
  flexDirection: 'row',
  justifyContent:'center',
    alignItems: 'center',
    height:30,
    width:80,
    borderRadius:15,
    borderColor:colors.blue,
    borderWidth:1
},
filter:{
  height:15,
  width:15,
  resizeMode:'contain'
},
filtertext:{
  fontFamily: fonts.light,
  color: colors.blue,
  fontSize: 9,
  paddingLeft:5
},
selectView:{
  flexDirection:'row',
  alignItems:'center',
},
datetext:{
  fontFamily: fonts.light,
  color: colors.blue,
  fontSize:11,
margin:5
},



});
