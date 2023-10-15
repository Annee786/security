import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import {
  Login,
  DashBoard,
  EmployeeAccount,
  AddnewEmployee,
  AddnewVenue,
  VenueList,
  JobPost,
  EmployeeDetails,
  Jobs,
  Chat,
  SupportChatList,
  PaymentHistory,
  ActivityLog,
  DashBoardEmployee,
  JobRequest,
  Notification,
  PaymentHistoryList,
  MyEarnings,
  EmployeeJobDetails,
  AdminProfile,
} from '../screens/';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="EmployeeJobDetails">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="EmployeeAccount" component={EmployeeAccount} />
        <Stack.Screen name="AddnewEmployee" component={AddnewEmployee} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        <Stack.Screen name="ActivityLog" component={ActivityLog} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="JobPost" component={JobPost} />
        <Stack.Screen name="VenueList" component={VenueList} />
        <Stack.Screen name="AddnewVenue" component={AddnewVenue} />
        <Stack.Screen name="SupportChatList" component={SupportChatList} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PaymentHistoryList" component={PaymentHistoryList}/>
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="Notification" component={Notification} />

        <Stack.Screen name="DashBoardEmployee" component={DashBoardEmployee} />
        <Stack.Screen name="JobRequest" component={JobRequest} />
        <Stack.Screen name="EmployeeJobDetails" component={EmployeeJobDetails} />
        <Stack.Screen name="MyEarnings" component={MyEarnings} />

        <Stack.Screen name="AdminProfile" component={AdminProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
