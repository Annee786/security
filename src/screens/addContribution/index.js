import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import MotoMobileHeader from '../../components/motoMobilesHeader';
import TitlesTab from '../../components/titlesTab/indes';
import MessageBox from '../../components/titlesTab/indes';
import Input from '../../components/input';
import Tab from '../../components/tab';
import SaveExitTab from '../../components/saveExitTab';
import BreadCrum from '../../components/breadCrumbs';
const AddContribution = ({navigation, onPress}) => {
    return (
      <SafeAreaView style={styles.pageView}>
        <Header heading="Add a new contribution" />
<Input placeHolder="Title"/>
  <MessageBox placeHolder="Description"describeMore/>
  <View style={styles.tabView}> 
     <Tab link input="Team" grey />
          <Tab input="Records" grey date />
          </View>
<Input placeHolder="Completed by "search/>
<BreadCrum heading="Members"/>
<Input Miceal placeHolder="Micheal "/>

<SaveExitTab heading="Save contribution to records"isWhite/>
<SaveExitTab heading="Cancel"/>

        </SafeAreaView>
  );
};

export default AddContribution;