import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddressMain from './AddressMain'
import AddressAdd from './AddressAdd'
import AddressEdit from './AddressEdit'

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
                <Stack.Screen name="Main" component={AddressMain} />
                <Stack.Screen name="Add" component={AddressAdd} />
                <Stack.Screen name="Edit" component={AddressEdit} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNav

const styles = StyleSheet.create({})