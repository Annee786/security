import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';

import {FlatList} from 'react-native';


const Reviews = [
  { 
   name: 'Rachel Laws',
    detail:'“ Excellent service!  fixed my bathroom issues promptly and professionally.Great communication and top-notch workmanship. Highly recommended! Thank you! “',
location:'Salt Lake, USA',
date:'5/8/2023',
image1:images.fixingWashroom,
image2:images.bathroomnew,

},
  {
    name: 'Patricia West',
    detail:'“Impressive service! quickly resolved my plumbing problem skill and efficiency.Courteous and reliable.i am thrilled with the results.Highly recommend!Thank you!', 
 
    location:'Twin Tower, USA',
date:'28/7/2023',
},
  {
    name: 'Kelly Phillips',
    detail:'Outstanding plumber! fixed my bathroom leaks flawlessly.Professional and curteous throughout the job.I am very satisfied with the service.Highly commendable!Thank you for your expertise!',
    location:'Hamilton Street, USA',

    date:'13/7/2023',
},

];
const renderItem =({item})=>{
    return (
        <View style={styles.review}>
        <View style={styles.imagetextView}>
          <Image style={styles.imageRachel} source={images.Rachel}></Image>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.rachelView}>
         {item.detail}
        </Text>
        <View style={styles.imagetextView}>
          <Image
            style={styles.bathroom}
            source={item.image1}></Image>
          <Image style={styles.bathroom} source={item.image2}></Image>
        </View>
        <View style={styles.dateView}>
        <Text style={styles.date}>{item.location}</Text>
        <Text style={styles.date}>{item.date}</Text>


        </View>
      </View>

        );
    }
const RatingReview = ({item}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Reviews & Ratings " />
      <ScrollView>
       
        <FlatList
        renderItem={renderItem}
        data={Reviews}
       
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RatingReview;
