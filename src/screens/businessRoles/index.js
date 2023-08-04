import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import images from '../../utils/images';
import Input from '../../components/input';
import Header from '../../components/header';
import MessageBox from '../../components/messageBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreadCrum from '../../components/breadCrumbs';
import SaveExitTab from '../../components/saveExitTab';
import Tab from '../../components/tab';
import StepCount from '../../components/stepCount';

const BusinessRoles = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.businessRolesView}>
      <ScrollView>
        <Header heading="Start your business" alarmNotification={true} />
        <StepCount />
        <View style={styles.buttonView}>
          <Tab input="Team Roles" />
          <Tab input="Partnership Terms" />
        </View>
        <View style={styles.rolesView}>
          <Text style={styles.subHeading}>
            Roles you need to build a successful team
          </Text>
          <Image style={styles.imageView} source={images.describeMore}></Image>
        </View>
        <Input placeHolder="Role" />
        <MessageBox placeHolder="Role broken down" describeMore />
        <BreadCrum heading="Skills" />
        <View style={styles.skillsButton}>
          <View style={styles.designbox}>
            <Text style={styles.designText}>UI/UX design</Text>
          </View>
          <View style={styles.designbox}>
            <Text style={styles.designText}>UI/UX design</Text>
          </View>
          <View style={styles.designbox}>
            <Text style={styles.designText}>Flutter</Text>
          </View>
        </View>
        <BreadCrum heading="Role type" />
        <View style={styles.tabsView}>
          <Tab input="In Person" />
          <Tab input="Online" />
          <Tab input="Doesn’t Matter" />
        </View>
        <BreadCrum heading="For this Role" />
        <Input
          placeHolder="Looking for partner to join business"
          showArrowButton
        />
        <View style={styles.searchTextView}>
          <Text style={styles.lookingtext}>
            Looking for a partner to join the business
          </Text>
          <Image style={styles.dotimageView} source={images.dotImage}></Image>
        </View>
        <View style={styles.searchTextView}>
          <Text style={styles.lookingtext}>
            Looking for a partner to join the business
          </Text>
          <Image style={styles.dotimageView} source={images.greyDot}></Image>
        </View>
        <View style={styles.dottedBox}>
          <Text style={styles.addmoreText}>+ Add more</Text>
        </View>
        <SaveExitTab heading="Save and Exit" />
        <Button
          onPress={() => navigation.navigate('Designations')}
          heading="Next"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessRoles;
