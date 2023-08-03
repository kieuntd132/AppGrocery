import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'
import FastImage from 'react-native-fast-image'
import TextInputApp from '../components/TextInputApp';
import { Fonts } from '../../Constant/Font';
import { Colors } from '../../Constant/Colors';
import ButtonApp from '../components/ButtonApp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CountryPicker } from "react-native-country-codes-picker";
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { BottomSheet } from 'react-native-btr';
import { CountryItem } from '../../Constant/Country';
import { useNavigation } from '@react-navigation/native';

const PickCountry = (props) => {
    const { data } = props;
    return (<View></View>)
    // https://snack.expo.dev/embedded/@aboutreact/bottom-sheet-example-in-react-native?platform=web
    // https://github.com/thakurballary/react-native-btr
    // library bottomsheet
}

const SignIn = () => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [flag, setflag] = useState('🇻🇳')
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const handleFlag = () => {
        setShow(true)
    }

    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ padding: 20 }}>
                    <Toolbar type="goBack" title="Sign In" onPressLeft={() => navigation.goBack()}></Toolbar>
                </View>
                <FastImage
                    style={{ width: windowWidth, height: 311, }}
                    source={require('../../../assets/images/img_signIn.png')}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                    <TextInputApp type="CountryPicker" flag={flag} onPress={handleFlag} placeholder="Phone Number"></TextInputApp>

                    <View style={{ marginTop: 17, marginBottom: 10 }}>
                        <TextInputApp type="Passwordleft" placeholder="Password"></TextInputApp>
                    </View>
                    <View>
                        <Text style={styles.alertText}>We need to verify you. We will send you a one time verification code.</Text>

                    </View>
                </View>
                <View style={styles.footer}>
                    <ButtonApp type="Fill" text="Sign In"></ButtonApp>
                    <View style={styles.goLoginContainer}>
                        <Text style={styles.alertText}>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text style={[styles.alertText, { color: Colors.orange_primary, fontFamily: Fonts.font_600 }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CountryPicker
                    show={show}
                    // when picker button press you will get the country object with dial code
                    pickerButtonOnPress={(item) => {
                        setCountryCode(item.dial_code);
                        setShow(false);
                        setflag(item.flag)
                    }}
                />
            </View>

        </KeyboardAwareScrollView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 12,
        backgroundColor: Colors.white,
    },
    alertText: {
        fontFamily: Fonts.font_400,
        fontSize: 16,
        lineHeight: 19.2,
        color: Colors.brown_bodyText
    },
    footer: {
        marginTop: 39,
        paddingHorizontal: 16
    },
    goLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})