import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';
import MessageBox from '../../components/messageBox';
import Tab from '../../components/tab';
const EditDescription = ({navigation, onPress}) => {
    return (
      <SafeAreaView style={styles.pageView}>
        <Header heading="Edit Description" />
        <MessageBox placeHolder="Description" describeMore/>
<View style={styles.tabsView}>
<Tab input="In Person" offwhite />
          <Tab input="Online"/>

</View>

        </SafeAreaView>
  );
};

export default EditDescription;