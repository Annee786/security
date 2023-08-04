import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitlesTab from '../../components/titlesTab/indes';
import MotoMobileHeader from '../../components/motoMobilesHeader';
const OverView = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header heading="Moto Mobiles" />
        <View style={styles.shadowView} />
        <MotoMobileHeader />
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Overview</Text>
          <Image style={styles.overView} source={images.arrowUp}></Image>
        </View>
        <View style={styles.descriptionView}>
          <View style={styles.description}>
            <Text style={styles.mainText}>Description </Text>
            <Image style={styles.upImage} source={images.arrowUp}></Image>
          </View>
          <Text style={styles.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue
            nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit
            amet porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus
            egestas, ultricies dui nec, tempor ante. Vestibulum eu imperdiet
            velit, Etiam venenatis sit amet risus a bibendum. Integer a nibh
            feugiat, congue nunc ac, auctor tortor. Nam luctus libero sed tortor
            luctus, sit amet porttitor
          </Text>
          <View style={styles.imagesView}>                  
             <Image style={styles.imageview}source={images.Bin}></Image>
          <Image style={styles.imageview}source={images.Pen}></Image>
          </View>

        </View>
        <TitlesTab title="Market Research" arrowDown />
        <TitlesTab title="Competition" arrowDown />
        <TitlesTab title="Additional Details" arrowDown />
        <TitlesTab title="Location/Budget/Stage" arrowDown />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OverView;
