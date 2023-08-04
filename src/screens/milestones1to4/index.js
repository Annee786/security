import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../../components/tab';


const progressArray = [
  {
    percents:'50%',
    numbers: 'Milestone 1',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam'
  },
  {    percents:'100%',

    numbers: 'Milestone 2',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam'
  },
  {    percents:'50%',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam',
    numbers: 'Milestone 3',
  },
  {    percents:'50%',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam',
    numbers: 'Milestone 4',
  },
 
];

const Milestone1to4 = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <ScrollView>
        <Header heading="Moto Mobiles" />
        <View style={styles.shadowView} />
        <View style={styles.logoView}>
          <Image style={styles.logoimage} source={images.LogoM}></Image>

          <View style={styles.logo}>
            <Text style={styles.logoText}>Moto Mobiles</Text>
            <Text style={styles.techText}>Tech</Text>
          </View>
          <Image
            style={styles.attachmentimage}
            source={images.attachments}></Image>
        </View>
        <View style={styles.imageStyling}>
          <Image style={styles.imagegroup} source={images.teamImage}></Image>
        </View>
        <View style={styles.tabView}>
          <Tab listing input="Team" />
          <Tab record input="Records" />
        </View>
        <View style={styles.overViewTab}>
          <Image style={styles.overView} source={images.List}></Image>
          <Text style={styles.overViewText}>Milestones</Text>
        </View>
        {progressArray.map((item)=>{
        return(
        <View style={styles.milestoneTab}>
        <View style={styles.tabView}>
          <View style={styles.percent}>
            <Text style={styles.percentText}>{item?.percents}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.mainText}>{item?.numbers}</Text>
            <Text style={styles.subText}>{item?.text}</Text>
          </View>
          <Image style={styles.imageView} source={images.greyDots}></Image>
        </View>
        <View style={styles.dateView}>
          <Image style={styles.dateimage} source={images.duedate}></Image>
          <Text style={styles.dateText}>Due : 20 Jan, 2022</Text>
        </View>
      </View>
         )
        })}
  
  <View style={styles.addTab}>
<Text style={styles.tabText}>+ Add New Milestone</Text>
  </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Milestone1to4;
