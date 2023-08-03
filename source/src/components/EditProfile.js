import {  StyleSheet, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'
import TextInputApp from '../components/TextInputApp'
import { Colors } from '../Constant/Colors'
import ButtonApp from '../components/ButtonApp'

const EditProfile = () => {
    return (
        <View style={styles.container}>
            <View>
                <Toolbar
                    type={"goBack"}
                    title={"Edit Profile"}
                />

                <TextInputApp
                    type={'Noicon'}
                    placeholder={"Name"}
                    margin={{ marginTop: 60 }}
                />
                <TextInputApp
                    type={'Phone'}
                    placeholder={"Phone number"}
                    margin={{ marginTop: 30 }}
                />
            </View>

            <ButtonApp
                type={'Fill'}
                text={'Update Profile'}
            />
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        paddingBottom: 20,
        backgroundColor: Colors.white,
        justifyContent: 'space-between'
    }
})