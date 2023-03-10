import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { useState } from 'react';
import React from 'react'

import Logo from '../../../assets/images/Logo_2.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignButton from '../../components/SocialSignButton';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();


    const onSubmitPressed = () => {
        console.warn('Confirm button pressed')
        navigation.navigate('Home')
    }
    const onResendPressed = () => {
        console.warn('Terms link pressed')
    }
    const onBackPressed = () => {
        console.warn('Conditions link pressed')
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>New password</Text>

                <CustomInput placeholder='Enter Code' value={code} setValue={setCode} />

                <CustomInput placeholder='Enter your new password' value={newPassword} setValue={setNewPassword} />

                <CustomButton onPress={onSubmitPressed} text='Submit' />

                <CustomButton onPress={onBackPressed} text='Back to Sign In' type='TERTIARY' />

                {/* <CustomButton onPress={onSignUpPressed} text="Don't have an account? Create one" type='TERTIARY' /> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: "#FDB075"
    }
})
export default NewPasswordScreen