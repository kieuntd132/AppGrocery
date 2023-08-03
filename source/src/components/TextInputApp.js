import { StyleSheet, Image, TextInput, View, TouchableOpacity, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Constant/Colors'
import { Fonts } from '../../Constant/Font';
const TextInputType = ["Noicon", "Passwordleft", "Password","CountryPicker"];

const TextInputApp = (props) => {

    const [TextInputState, setTextInputState] = useState("");
    const [password, setpassword] = useState(true);
// <<<<<<< HEAD:source/thanhduy/src/TextInputApp.js
    const { type, placeholder, onChangeText, value, margin } = props;

    //state country phone
    const [countryCode, setCountryCode] = useState("SE")
    const [callingCode, setCallingCode] = useState("46")
// =======
    // const { type, placeholder, onChangeText=(text)=>{}, value, flag, onPress } = props;
    const [handleText, sethandleText] = useState(value)
// >>>>>>> dev:source/src/components/TextInputApp.js

    const handleOnChangeText= (newText) =>{
        sethandleText(newText)
        onChangeText(newText)
    }
    switch (type) {
        // no-icon
        case TextInputType[0]:
            if (TextInputState == TextInputType[0]) {
                break;
            }
            setTextInputState(TextInputType[0]);
            break;
        case TextInputType[1]:
            if (TextInputState == TextInputType[1]) {
                break;
            }
            setTextInputState(TextInputType[1]);
            break;
        case TextInputType[2]:
            if (TextInputState == TextInputType[2]) {
                break;
            }
            setTextInputState(TextInputType[2]);
            break;
        case TextInputType[3]:
            if (TextInputState == TextInputType[3]) {
                break;
            }
            setTextInputState(TextInputType[3]);
            break;
        default:
            break;
    }

    return (
        <View style={margin}>
            {
                // no-icon
                TextInputType[0] == TextInputState &&
                <TextInput
                    style={styles.Noicon}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.placeholder}
                    onChangeText={(text)=>{handleOnChangeText(text)}}
                    value={handleText} />
            }
            {
                // password
                TextInputType[1] == TextInputState &&
                <View style={styles.viewPass}>
                    <TextInput
                        style={[styles.txtPass, {paddingStart: 14}]}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.placeholder}
                        password={true}
                        secureTextEntry={password}
                        onChangeText={(text)=>{handleOnChangeText(text)}}
                        value={handleText}/>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            setpassword(!password);
                        }}>
                        <Image style={styles.iconRight} source={password ? require('../../../assets/images/ic-eye.png') : require('../../../assets/images/ic-eye-slash.png')} />
                    </TouchableOpacity>

                </View>

            }
            {
                // password
                TextInputType[2] == TextInputState &&
                <View style={styles.viewPass}>
                    <Image style={styles.iconLeft} source={require('../../../assets/images/ic-lock.png')} />
                    <TextInput
                        style={styles.txtPass}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.placeholder}
                        password={true}
                        secureTextEntry={password}
                        onChangeText={(text)=>{handleOnChangeText(text)}}
                        value={handleText}/>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            setpassword(!password);
                        }}>
                        <Image style={styles.iconRight} source={password ? require('../../../assets/images/ic-eye.png') : require('../../../assets/images/ic-eye-slash.png')} />
                    </TouchableOpacity>

                </View>

            }
     {
                // no-icon
                TextInputType[3] == TextInputState &&
       
            <View style={styles.flagView}>
                <TouchableOpacity onPress={onPress} style={{flexDirection:'row',alignItems:'center'}}>  
                    {/* <Image style={{width:33,height:26}} source={require('../../../assets/images/ic_sampleFlag.png')}></Image> */}
                    <Text style={styles.flag}>{flag}</Text>
                    <Image style={{width:9.67,height:4.67,marginStart:12}} source={require('../../../assets/images/ic_arrowDown.png')}></Image>
                </TouchableOpacity>
                <TextInput
                    style={styles.inputFlag}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.placeholder}
                    onChangeText={(text)=>{handleOnChangeText(text)}}
                    value={handleText}
                    keyboardType='numeric' />
             </View>
            }
        </View>
    )
}

export default TextInputApp

const styles = StyleSheet.create({
    Noicon: {
        paddingStart: 27,
        paddingEnd: 27,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontFamily: Fonts.font_400,
        color: Colors.placeholder,
        backgroundColor: Colors.fillTextInput,
        borderRadius: 5,
    },
    txtPass: {
        fontSize: 16,
        fontFamily: Fonts.font_400,
        color: Colors.placeholder,
        flex: 1,
        paddingLeft: 21,
        paddingTop: 14,
        paddingBottom: 14,
    },
    viewPass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.fillTextInput,
        paddingEnd: 13,
        paddingStart: 13,
        borderRadius: 5
    },
    flagView:{
        flexDirection:'row',
        backgroundColor: Colors.fillTextInput,
        borderRadius: 5,
        paddingStart:12,
    },
    flag:{
        fontSize:24,
        
    },

    inputFlag:{
        fontSize: 16,
        fontFamily: Fonts.font_400,
        color: Colors.placeholder,
        flex:1,
        paddingLeft: 20
    },
    iconRight: {
        width: 22,
        height: 15,
    },
    iconLeft: {
        width: 13,
        height: 17,
    },
})