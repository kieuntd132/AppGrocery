import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Constant/Colors'
import ButtonApp from './ButtonApp'
import TextInputApp from './TextInputApp'
import Toolbar from './Toolbar'
import SearchBar from './SearchBar'

const DemoComponent = () => {
    const [email, setemail] = useState("");
    const [handleSearch, sethandleSearch] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <ButtonApp type={"Fill"} text={"Nguyễn tuấn anh"} onPress={() => { console.log(email); }} />
            </View>
            <View style={styles.button} >
                <ButtonApp type={"Outline"} text={"Button - Outline"} onPress={() => { console.log(handleSearch); }} />
            </View>
            <TextInputApp value="test value" type={"Noicon"} placeholder={"Full name"} onChangeText={setemail} />
            <TextInputApp type={"Passwordleft"} placeholder={"New Password"} onChangeText={setemail} />
            <TextInputApp type={"Password"} placeholder={"Old Password"} onChangeText={setemail} />

            <Toolbar
                type={"goBack"}
                title={"Addresses"}
                onPressLeft={() => { console.log("alo"); }}
                onPressRight={() => { console.log("hihi"); }} />
            <Toolbar
                type={"addRight"}
                title={"Addresses"}
                onPressLeft={() => { console.log("alo"); }} />
            <SearchBar onChangeText={sethandleSearch} onSubmitEditing={()=> {console.log("Hello");}}></SearchBar>
        </View>
    )
}

export default DemoComponent

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'space-around',
    }
})