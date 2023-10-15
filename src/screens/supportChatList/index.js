import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import JobHeader from '../../components/jobHeader';
import {FlatList} from 'react-native';
import SearchTab from '../../components/searchTab';

const name = [
  {
    image: images.EstherHoward,
    name: 'Esther Howard',
    details:
      'Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id es',
  },
  {
    image: images.Courtney,
    name: 'Courtney Henry',
    details:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu',
  },
  {
    image: images.EstherHoward,
    name: 'Esther Howard',
    details:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu',
  },
  {
    image: images.AlbertFlores,
    name: 'Albert Flores',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
  },
  {
    image: images.Jenny,
    name: 'Jenny Wilson',
    details:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es',
  },
  {
    image: images.TheresaWebb,
    name: 'Theresa Webb',
    details:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.searchView}>
      <View style={styles.nameimage}>
        <Image style={styles.picimage} source={item.image}></Image>
        <View style={styles.textView}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.details}</Text>
        </View>
        <Text style={styles.time}>12:33 am</Text>
      </View>
    </View>
  );
};

const SupportChatList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <JobHeader heading="Support Chat" />
      <ScrollView>
        <SearchTab onPress={() => navigation.navigate('Chat')}  heading="Search by name" image={images.search} />
        <FlatList renderItem={renderItem} data={name} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportChatList;
