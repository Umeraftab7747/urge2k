import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../../Screens/Auth/StartScreen/StartScreen';
import SignUpScreen from '../../Screens/Auth/SignUp/SignUpScreen';
import LoginScreen from '../../Screens/Auth/Login/LoginScreen';
import ForgotPassword from '../../Screens/Auth/ForgotPassword/ForgotPassword';
import CompleteRegistration from '../../Screens/Auth/SignUp/CompleteRegistration';
import GenderSpecific from '../../Screens/Auth/SignUp/GenderSpecific';
import SignUpAccountCategory from '../../Screens/Auth/SignUp/SignUpAccountCategory';
import ClientProfileScreen from '../../Screens/Profile/ClientProfile/ClientProfileScreen';
import ModalProfileScreen from '../../Screens/Profile/ModalProfile/ModalProfileScreen';
import SettingScreen from '../../Screens/Profile/SettingScreen/SettingScreen';
import ReportScreen from '../../Screens/Profile/ReportScreen/ReportScreen';
import EditProfileScreen from '../../Screens/Profile/EditProfile/EditProfileScreen';
import WithDrawMoney from '../../Screens/Profile/WithDrawMoney/WithDrawMoney';
import HomeScreen from '../../Screens/Home/HomeScreen';
import ChatScreen from '../../Screens/Home/ChatScreen';
import ChatRoomScreen from '../../Screens/Home/ChatRoomScreen';
import SearchScreen from '../../Screens/Home/SearchScreen';
import ActorProfile from '../../Screens/Profile/ActorProfile/ActorProfile';
import SubscribeScreen from '../../Screens/SubscribeScreen/SubscribeScreen';
import PackageScreen from '../../Screens/PackageScreen/PackageScreen';
import DateScreen from '../../Screens/PackageScreen/DateScreen';

const Stack = createNativeStackNavigator();

const MyNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="start"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="CompleteRegistration"
          component={CompleteRegistration}
        />
        <Stack.Screen name="GenderSpecific" component={GenderSpecific} />
        <Stack.Screen
          name="SignUpAccountCategory"
          component={SignUpAccountCategory}
        />
        <Stack.Screen
          name="ClientProfileScreen"
          component={ClientProfileScreen}
        />
        <Stack.Screen
          name="ModalProfileScreen"
          component={ModalProfileScreen}
        />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="WithDrawMoney" component={WithDrawMoney} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ActorProfile" component={ActorProfile} />
        <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
        <Stack.Screen name="PackageScreen" component={PackageScreen} />
        <Stack.Screen name="DateScreen" component={DateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigation;
