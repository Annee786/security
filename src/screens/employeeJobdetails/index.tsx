import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import {colors, images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import JobHeader from '../../components/jobHeader';
import {FlatList} from 'react-native';
import Cylinder from '../../components/cylinder';

const location = [
  {
    text: 'London,US',
    image: images.mappin,
    subtext: 'Location',
  },
  {
    text: '10:00 - 6:00',
    image: images.clock,
    subtext: 'Timings',
  },
  {
    text: '$ 75.00',
    subtext: 'Rates per month',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.column}>
      <Image style={styles.mapin} source={item.image}></Image>
      <Text style={styles.location}>{item.text}</Text>
      <Text style={styles.text}>{item.subtext}</Text>
    </View>
  );
};
const EmployeeJobDetails = ({navigation}) => {
  return (

    <SafeAreaView style={styles.pageView}>
      <View style={{paddingBottom:90}}>
      <ImageBackground style={styles.background} source={images.background}>
        <JobHeader heading="Job Details" />
        <View style={styles.paymentbox}>
          <View style={styles.circle}>
            <Image style={styles.security} source={images.security}></Image>
          </View>
          <Text style={styles.securityText}>Security In-charge</Text>
          <Text style={styles.barone}>Barone LLC.</Text>

          <FlatList renderItem={renderItem} data={location} numColumns={3} />
        </View>
      </ImageBackground>
      </View>
      <ScrollView>

      <BreadCrum heading="Job Description" />
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled.
      </Text>
      <BreadCrum heading="Location" />
<Image style={styles.map}source={images.Map} ></Image>
<View style={styles.row}>
<Cylinder  onPress={() => navigation.navigate('MyEarnings')}  image={images.history} heading="Clock - out" textcolor={colors.blue} />
<Cylinder  onPress={() => navigation.navigate('MyEarnings')}  image={images.history} heading="Clock - in" textcolor={colors.white} color={colors.blue}/>

</View>
</ScrollView>

    </SafeAreaView>

  );
};

export default EmployeeJobDetails;
