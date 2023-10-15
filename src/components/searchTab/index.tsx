import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts,colors} from '../../utils';

const SearchTab = ({heading, onPress,image}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.searchtab}>
       {image && <Image style={styles.search} source={image}></Image>}

      <Text style={styles.searchText}>{heading}</Text>
    </TouchableOpacity>


  );
};

export default SearchTab;

const styles = StyleSheet.create({
    searchtab: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        width: '90%',
        backgroundColor: colors.tabColor,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10,
        paddingHorizontal:15,
        marginBottom:20
    
      },
      searchText: {
        fontFamily: fonts.light,
        fontSize: 12,
        color: colors.grey,
        paddingLeft:15
      },
      search:{
        height: 15,
        width: 15,
        resizeMode: 'contain' ,
        tintColor:colors.grey
    }

});
