import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../../components/Toolbar'
import TextInputApp from '../../components/TextInputApp'
import {CountryPicker} from "react-native-country-codes-picker";
import ButtonApp from '../../components/ButtonApp';
import { Colors } from '../../../Constant/Colors';

const EditProfile = (props) => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+84');
    const [flag, setflag] = useState('🇻🇳')
    const handleFlag = () =>{
        setShow(true)
    }

    const {navigation} = props;
   
  return (
    <View style={styles.container}>
        <View>
     <Toolbar type="goBack" title="Edit Profile" onPressLeft={()=> navigation.goBack()}/> 
     <View style={{marginTop:64}}>
        <TextInputApp type="Noicon" value="raiko"></TextInputApp>
        <View style={{marginTop:30}}>
        <TextInputApp type="CountryPicker" flag={flag} value={"+84 123 456 78"} placeholder="Phone Number" onPress={handleFlag} ></TextInputApp>
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
    <ButtonApp type="Fill" text="Update Profile"></ButtonApp>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        padding: 14,
        flex:1,
        justifyContent:'space-between',
        paddingTop: 0,
        backgroundColor: Colors.white
    }
})