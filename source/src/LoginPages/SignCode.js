import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState, useRef } from 'react'
import { Fonts } from '../../Constant/Font';
import { Colors } from '../../Constant/Colors'
import Toolbar from '../components/Toolbar';
import TextInputApp from '../components/TextInputApp';
import ButtonApp from '../components/ButtonApp';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const InputCode = () => {
    const [CodeOne, setCodeOne] = useState("");
    const [CodeTwo, setCodeTwo] = useState("");
    const [CodeThrre, setCodeThrre] = useState("");
    const [CodeFour, setCodeFour] = useState("");
    const [CodeFive, setCodeFive] = useState("");
    
    return (
        <View style={styles.marginTextInput}>
            <TextInput style={styles.codeSMS}
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                value={CodeOne}
                onChangeText={text => {
                    setCodeOne(text);
                    if (text != "") {
                        this.secondTextInput.focus();
                    }
                }}
               
                ref={(input) => { this.firstTextInput = input; }}
                keyboardType={'number-pad'}
                returnKeyType={'next'}
                maxLength={1}/>
            <TextInput style={styles.codeSMS}
                onSubmitEditing={() => { this.thrreTextInput.focus(); }}
                value={CodeTwo}
                onKeyPress={({nativeEvent: {key: keyValue} }) => {
                    if (keyValue == 'Backspace' && CodeTwo == "") this.firstTextInput.focus();
                }}
                onChangeText={text => {
                    setCodeTwo(text);
                    if (text != "") {
                        this.thrreTextInput.focus();
                    }
                }}
                ref={(input) => { this.secondTextInput = input; }}
                keyboardType={'number-pad'}
                returnKeyType={'next'}
                maxLength={1} />
            <TextInput style={styles.codeSMS}
                onSubmitEditing={() => { this.fourTextInput.focus(); }}
                value={CodeThrre}
                onKeyPress={({nativeEvent: {key: keyValue} }) => {
                    if (keyValue == 'Backspace' && CodeThrre == "") this.secondTextInput.focus();
                }}
                onChangeText={text => {
                    setCodeThrre(text);
                    if (text != "") {
                        this.fourTextInput.focus();
                    }
                }}
                ref={(input) => { this.thrreTextInput = input; }}
                keyboardType={'number-pad'}
                returnKeyType={'next'} maxLength={1} />
            <TextInput style={styles.codeSMS}
                onSubmitEditing={() => { this.fiveTextInput.focus(); }}
                value={CodeFour}
                onKeyPress={({nativeEvent: {key: keyValue} }) => {
                    if (keyValue == 'Backspace' && CodeFour == "")  this.thrreTextInput.focus();
                }}
                onChangeText={text => {
                    setCodeFour(text);
                    if (text != "") {
                        this.fiveTextInput.focus();
                    } 
                }}
                ref={(input) => { this.fourTextInput = input; }}
                keyboardType={'number-pad'}
                returnKeyType={'next'} maxLength={1} />
            <TextInput style={styles.codeSMS}
                value={CodeFive}
                onKeyPress={({nativeEvent: {key: keyValue} }) => {
                    if (keyValue == 'Backspace' && CodeFive == "")  this.fourTextInput.focus();
                }}
                onChangeText={text => {
                    setCodeFive(text);
                    if (text == "") {
                        // this.fourTextInput.focus();
                    } else {
                        Keyboard.dismiss();
                    }
                }}
                ref={(input) => { this.fiveTextInput = input; }}
                keyboardType={'numeric'} returnKeyType={'done'} maxLength={1} />

        </View>
    )
}

const SignCode = () => {
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
            <Toolbar type={'goBack'} title={'Sign Up'} onPressLeft={()=> navigation.goBack()}/>
            <KeyboardAvoidingView
                behavior="position"
                enabled
                style={styles.boxTextInput}>
                <View style={styles.boxImagePhone}>
                    <Image style={styles.imagePhone} source={require('../../../assets/images/img_code_sms.png')} />
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.textEnter}>Enter Verification Code</Text>
                    <Text style={styles.textFor}>We have sent SMS to:{'\n'}046 XXX XX XX</Text>
                </View>
                <InputCode />
            </KeyboardAvoidingView >
            <View style={styles.boxButton}>
                <ButtonApp type={'Fill'} text={'Next'} onPress={()=> navigation.navigate('HomeTab')}/>
            </View>

        </View >

    )
}

export default SignCode

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
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeSMS: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.brown_bodyText,
        width: 50,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: Fonts.font_700,
        lineHeight: 25
    },
    boxButton: {
        marginTop: 20
    }
})