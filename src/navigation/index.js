import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Splash2 from '../screens/splash2';
import {OnBoarding1,OnBoarding2,LoginUnfill,SignUpUnfill,ForgetPassword} from '../screens/';
import HomeScreen from '../screens/homeScreen';
import {LogAJob,UploadedFields,LocationMap,JobCreated,PlumberRequests,BookingConfirmed,PlumberDetails} from '../screens/';
import Notification from '../screens/notification';
import {Messages,ChatWithPlumber} from '../screens/';
import JobsPending from '../screens/jobsPending';
import {Profile,EditProfile} from '../screens/'
import {Payment,SubscriptionPayment,TrackPlumber,Subscription} from '../screens/';
import SignUpSuccessfull from '../screens/';
import{ JobPreferences,SetLocation} from '../screens/';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="EditProfile">

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="LoginUnfill" component={LoginUnfill} />
        <Stack.Screen name="SignUpUnfill" component={SignUpUnfill} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LogAJob" component={LogAJob} />
        <Stack.Screen name="UploadedFields" component={UploadedFields} />
        <Stack.Screen name="LocationMap" component={LocationMap} />
        <Stack.Screen name="JobCreated" component={JobCreated} />
        <Stack.Screen name="PlumberRequests" component={PlumberRequests} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="ChatWithPlumber" component={ChatWithPlumber} />
        <Stack.Screen name="JobsPending" component={JobsPending} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="SubscriptionPayment" component={SubscriptionPayment} />
        <Stack.Screen name="TrackPlumber" component={TrackPlumber} />
        <Stack.Screen name="BookingConfirmed" component={BookingConfirmed} />
        <Stack.Screen name="PlumberDetails" component={PlumberDetails} />
        <Stack.Screen name="JobPreferences" component={JobPreferences} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;