import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';



const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>


    );
}

const styles = StyleSheet.create({})

export default Navigation;
