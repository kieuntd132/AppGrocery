import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../../components/Toolbar'
import TextInputApp from '../../components/TextInputApp'
import ButtonApp from '../../components/ButtonApp'
import { Colors } from '../../../Constant/Colors'
import { useNavigation } from '@react-navigation/native'

const ChangePassword = () => {
    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Toolbar type={"goBack"} title={"Change Password"} onPressLeft={() => navigation.goBack()} />
                <View style={{ marginTop: 50 }}>
                    <TextInputApp type={"Password"} placeholder={"Old Password"} onChangeText={setoldPassword} />
                </View>
                <View style={styles.newPassword}>
                    <View style={styles.textInput}>
                        <TextInputApp type={"Password"} placeholder={"New Password"} onChangeText={setnewPassword} />
                    </View>
                    <View style={styles.textInput}>
                        <TextInputApp type={"Password"} placeholder={"Confirm Password"} onChangeText={setconfirmPassword} />
                    </View>

                </View>
            </View>
            <View>
                <View style={styles.button}>
                    <ButtonApp type={"Fill"} text={"Confirm"} onPress={() => { }} />
                </View>
                <View style={styles.button} >
                    <ButtonApp type={"Outline"} text={"Back To Sign In"} onPress={() => { }} />
                </View>
            </View>

        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: Colors.white
    },
    newPassword: {
        marginTop: 50
    },
    textInput: {
        marginTop: 8,
    },
    button: {
        marginTop: 16
    }
})