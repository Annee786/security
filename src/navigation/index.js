import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartUp from '../screens/startup';
import Login from '../screens/login';
import {ProfilePicture, SignUp, Signup, Skills, Splash} from '../screens';
import PersonalInfo from '../screens/personalinfo';
import MyBusiness from '../screens/myBusiness';
import BusinessDescription from'../screens/businessDescription';
import UploadLogo from '../screens/uploadLogo';
import BusinessRoles from '../screens/businessRoles';
import Designations from '../screens/designations';
import GeneralTerms from '../screens/generalTerms';
import AddMembers from '../screens/addMembers';
import Progress from '../screens/progress';
import BusinessPlan from '../screens/businessPlan';
import PdfUpload from '../screens/pdfUpload';
import AddMilestone from '../screens/addMilestone';
import CampaignMenu from '../screens/campaignMenu';
import OverView from '../screens/overView';
import TeamsRoles from '../screens/teamsRoles';
import PatnerShipTerm from '../screens/patnershipsTerm';
import CampaignMilestone from '../screens/campaignMilestone';
import Milestone1to4 from '../screens/milestones1to4';
import BusinessPlanPDF from '../screens/businessPlanPDF';
import EditPatnershipRoles from'../screens/editPatnershipTerms';
import Team from '../screens/team';
import RecordsOfMonth from'../screens/recordsofMonths';
import RecordDesign from'../screens/recordDesign';
import AddNewRole from'../screens/addingNewRole';
import AddContribution from'../screens/addContribution';
import Warnings from '../screens/warnings';
import EditRole from '../screens/editRole';
import EditDescription from '../screens/editDescription';
import Home from '../screens/home';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="MyBusiness" component={MyBusiness} />
        <Stack.Screen name="BusinessDescription" component={BusinessDescription} />
        <Stack.Screen name="UploadLogo" component={UploadLogo} />
        <Stack.Screen name="BusinessRoles" component={BusinessRoles} />
        <Stack.Screen name="Designations" component={Designations} />
        <Stack.Screen name="GeneralTerms" component={GeneralTerms} />
        <Stack.Screen name="AddMembers" component={AddMembers} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="BusinessPlan" component={BusinessPlan} />
        <Stack.Screen name="PdfUpload" component={PdfUpload} />
        <Stack.Screen name="AddMilestone" component={AddMilestone} />
        <Stack.Screen name="CampaignMenu" component={CampaignMenu} />
        <Stack.Screen name="OverView" component={OverView} />
        <Stack.Screen name="TeamsRoles" component={TeamsRoles} />
        <Stack.Screen name="PatnerShipTerm" component={PatnerShipTerm} />
        <Stack.Screen name="CampaignMilestone" component={CampaignMilestone} />
        <Stack.Screen name="Milestone1to4" component={Milestone1to4} />
        <Stack.Screen name="BusinessPlanPDF" component={BusinessPlanPDF} />
        <Stack.Screen name="EditPatnershipRoles" component={EditPatnershipRoles} />
        <Stack.Screen name="EditDescription" component={EditDescription} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="RecordsOfMonth" component={RecordsOfMonth} />
        <Stack.Screen name="RecordDesign" component={RecordDesign} />
        <Stack.Screen name="AddNewRole" component={AddNewRole} />
        <Stack.Screen name="AddContribution" component={AddContribution} />
        <Stack.Screen name="Warnings" component={Warnings} />
        <Stack.Screen name="EditRole" component={EditRole} />
        <Stack.Screen name="Home" component={Home} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
