import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState, useRef } from 'react'
import { Fonts } from '../../Constant/Font';
import { Colors } from '../../Constant/Colors'
import Toolbar from '../components/Toolbar';
import TextInputApp from '../components/TextInputApp';
import ButtonApp from '../components/ButtonApp';
import { useNavigation } from '@react-navigation/native';


const SignPass = () => {
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const [isFocused, setIsFocused] = useState(false);

    const textInputRef = useRef(null);

    const handleFocusTextInput = () => {
        textInputRef.current.focus();
    };
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Toolbar type={'goBack'} title={'Sign Up'} onPressLeft={() => navigation.goBack()}/>
            <View style={styles.boxImagePhone}>
                <Image style={styles.imagePhone} source={require('../../../assets/images/img_phone.png')} />
            </View>
            <View style={styles.boxText}>
                <Text style={styles.textEnter}>Enter the password</Text>
                <Text style={styles.textFor}>For the security & safety please choose a password</Text>
            </View>
            <KeyboardAvoidingView
                behavior="position"
                enabled
                style={styles.boxTextInput}>
                <View style={styles.marginTextInput}>
                    <TextInputApp type={"Password"} placeholder={"Password"} onChangeText={setpassword} />
                </View>
                <View style={styles.marginTextInput}>
                    <TextInputApp type={"Password"} placeholder={"Confirm Password"} onChangeText={setconfirmPassword} />
                </View>
            </KeyboardAvoidingView>

            <View style={styles.boxButton}>
                <ButtonApp type={'Fill'} text={'Next'} onPress={() => navigation.navigate('SignCode')}/>
            </View>

        </View >


    )
}

export default SignPass

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flex: 1,
        padding: 20
    },
    boxImagePhone: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagePhone: {
        width: 365,
        height: 335
    },
    boxText: {
        marginTop: 10
    },
    textEnter: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: Fonts.font_400,
        color: '#7F4E1D',
        fontWeight: '700',
        marginTop: 10,
    },
    textFor: {
        width: 312,
        height: 43,
        color: '#7F4E1D',
        fontSize: 16,
        lineHeight: 19.2,
        fontFamily: Fonts.font_400,
        marginTop: 12,
    },
    marginTextInput: {
        marginTop: 16
    },
    boxButton: {
        marginTop: 20
    }
})