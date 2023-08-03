import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ongoing from './Ongoing';
import History from './History';
import { Colors } from '../../../../source/Constant/Colors';
import { Fonts } from '../../../../source/Constant/Font';
const Tab = createMaterialTopTabNavigator();

function tabLabel(text) {
    return (
        <Text>{text}</Text>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: Colors.topTabSlt,
                tabBarInactiveTintColor: Colors.topTab,
                tabBarStyle: { backgroundColor: Colors.white, },
                tabBarLabelStyle: {
                    fontFamily: Fonts.font_400,
                    fontWeight: '400',
                    fontSize: 20,
                    textTransform: 'capitalize',
                    fontSize: 20, fontStyle: 'normal'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.topTabSlt,
                    width: 114,
                    height: 3,
                    borderTopLeftRadius: 29,
                    borderTopRightRadius: 29,
                    left: (Dimensions.get('window').width / 2 - 114) / 2
                },
            }}
        >
            <Tab.Screen name="Home" component={Ongoing} options={{
                tabBarLabel: "Ongoing"
            }} />
            <Tab.Screen name="Settings" component={History} options={{
                tabBarLabel: "History"
            }} />

        </Tab.Navigator>
    )
}

export default function TopBarNavigator() {
    return (
        <MyTabs />
    )
}