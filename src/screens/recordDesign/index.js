import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MessageBox from '../../components/messageBox';
import TitlesTab from '../../components/titlesTab/indes';

const MonthsView = [
  {
    months: 'Mon',
    dates: '9',
  },
  {
    months: 'Tue',
    dates: '10',
  },
  {
    months: 'Wed',
    dates: '11',
  },
  {
    months: 'Thu',
    dates: '12',
  },
  {
    months: 'Fri',
    dates: '13',
  },
  {
    months: 'Sat',
    dates: '14',
  },
  {
    months: 'Sun',
    dates: '15',
  },
];

const RecordDesign = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <Header heading="January" recordBox={true} />
      <ScrollView>
        {MonthsView.map(item => {
          return (
            <View style={styles.weekView}>
              <Text style={styles.months}>{item.months}</Text>
              <Text style={styles.dates}>{item.dates}</Text>
            </View>
          );
        })}
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
          <View style={styles.shareView}>
            <View style={styles.shareTab}>
              <Image style={styles.linkImage} source={images.Link1}></Image>
              <Text style={styles.mainText}>Download files</Text>
            </View>
            <View style={styles.cubanTab}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.mainText}>Completed by </Text>
                <View style={{flexDirection:'row'}}>
                <Image
                  style={styles.markimage}
                  source={images.markCuban}></Image>
                   
                <Text style={styles.mainText}>Mark Cuban </Text></View>
                </View>
            </View>
          </View>
        </View>
        <TitlesTab title="Front end development" arrowDown />
        <TitlesTab title="Back end development" arrowDown />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecordDesign;
