import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tab from '../../components/Tab';
import HeaderTab from '../../components/headerTab';
import Button from '../../components/button';

const AddnewEmployee = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageView}>
      <View style={styles.topview}>
        <Text style={styles.addText}>Add New Employee</Text>
        <Text style={styles.uploadtext}>Upload Image</Text>
      </View>
      <ScrollView>
        <View style={styles.nameView}>
          <Tab tabHeader="First Name" placeHolder="Theresa" />
          <Tab tabHeader="Last Name" placeHolder="Webb" />
        </View>
        <HeaderTab
          tabHeader="Email Address"
          placeHolder="TheresaWebb@company.com"
        />
        <HeaderTab
          tabHeader="Phone Number"
          placeHolder="+1800 657 6790 6576"
          flag={images.flag}
          image={images.down}
        />
        <HeaderTab
          tabHeader="Email Address"
          placeHolder="TheresaWebb@company.com"
        />
        <View style={styles.nameView}>
          <Tab tabHeader="Gender" placeHolder="Female" image={images.down} />
          <Tab tabHeader="Age" placeHolder="Webb" image={images.down} />
        </View>
        <View style={styles.nameView}>
          <Tab tabHeader="Badge#" placeHolder="PK-12749" />
          <Tab tabHeader="Badge Expire Date" placeHolder="17/05/2024" />
        </View>
        <HeaderTab tabHeader="Rate per hour" placeHolder="$ 78.00" />
        <View style={styles.nameView}>
          <Tab
            isimage={images.calenderdays}
            tabHeader="Employee Start Date"
            placeHolder="15/2/2022"
          />
          <Tab
            isimage={images.calenderdays}
            tabHeader="Employee End Date"
            placeHolder="03/11/2023"
          />
        </View>
        <Button  onPress={() => navigation.navigate('EmployeeDetails')} heading="Add Employee" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddnewEmployee;
