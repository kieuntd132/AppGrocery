import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'
import FastImage from 'react-native-fast-image'
import { Dimensions } from 'react-native';
import TextInputApp from '../components/TextInputApp';
import { Fonts } from '../../Constant/Font';
import { Colors } from '../../Constant/Colors';
import ButtonApp from '../components/ButtonApp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CountryPicker} from "react-native-country-codes-picker";
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [flag, setflag] = useState('🇻🇳')
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const handleFlag = () =>{
        setShow(true)
    }

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <Toolbar type="goBack" title="Sign Up" onPressLeft={() => navigation.goBack()}></Toolbar>
            </View>
            <FastImage
                style={{ width: windowWidth, height: 311, }}
                source={require('../../../assets/images/ic_signup.png')}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                <TextInputApp type="Noicon" placeholder="Name Surname"></TextInputApp>
                <View style={{ marginTop: 17 }}>
                    <TextInputApp type="CountryPicker" flag={flag} onPress={handleFlag} placeholder="Phone Number"></TextInputApp>
                </View>
                <Text style={styles.alertText}>We need to verify you. We will send you a one time verification code.</Text>
            </View>
            <View style={styles.footer}>
                <ButtonApp type="Fill" text="Next" onPress={()=> navigation.navigate('SignPass')}></ButtonApp>
                <View style={styles.goLoginContainer}>
                    <Text style={styles.alertText}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.alertText,{color:Colors.orange_primary,fontFamily:Fonts.font_600}]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <CountryPicker
      show={show}
      // when picker button press you will get the country object with dial code
      pickerButtonOnPress={(item) => {
        setCountryCode(item.dial_code);
        setflag(item.flag)
        setShow(false);
      }}
    />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between',
        paddingBottom:32,
        backgroundColor: Colors.white
    },
    alertText: {
        marginTop: 10,
        fontFamily: Fonts.font_400,
        fontSize: 16,
        lineHeight: 19.2,
        color: Colors.brown_bodyText
    },
    footer:{
        marginTop:39,
        paddingHorizontal:16
    },
    goLoginContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    }
})