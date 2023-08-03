import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//=======================Pages =======================
import Shop from './AppPages/HomeTab/Shop'
import Explore from './AppPages/ExploreTab/Explore';
import Cart from './AppPages/CartTab/Cart';
import Favorite from './AppPages/FavoriteTab/Favorite';
import Account from './AppPages/AccountTab/Account';

import SignIn from './LoginPages/SignIn';
import SignUp from './LoginPages/SignUp';
import { NavigationContainer } from '@react-navigation/native';

import Profile from './AppPages/AccountTab/Profile';
import Orders from './AppPages/AccountTab/Orders';
import AddressMain from './AppPages/AccountTab/AddressMain';
import AddressEdit from './AppPages/AccountTab/AddressEdit';
import AddressAdd from './AppPages/AccountTab/AddressAdd';
import Payment from './screenDemo/Payment';
import EditProfile from './AppPages/AccountTab/EditProfile';
import ChangePassword from './AppPages/AccountTab/ChangePassword';
import My_card from './AppPages/AccountTab/My_card';
import New_cards from './AppPages/AccountTab/New_cards';


import { Colors } from '../Constant/Colors';
import { Fonts } from '../Constant/Font';
import Friut from './AppPages/ExploreTab/Friut';
import ProductDetail from './AppPages/HomeTab/ProductDetail';
import SignPass from './LoginPages/SignPass';
import SignCode from './LoginPages/SignCode';
import Welcome from './LoginPages/Welcome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DetailHome = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Shop">
            <Stack.Screen name='Shop' component={Shop} />
            <Stack.Screen name='Fruit' component={Friut} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return focused ? <Image style={{ tintColor: Colors.orange_primary, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_home.png')} /> : <Image style={{ tintColor: Colors.brown_bodyText, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_home.png')} />
                    } else if (route.name === 'Explore') {
                        return focused ? <Image style={{ tintColor: Colors.orange_primary, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_explore.png')} /> : <Image style={{ tintColor: Colors.brown_bodyText, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_explore.png')} />
                    } else if (route.name === 'Cart') {
                        return focused ? <Image style={{ tintColor: Colors.orange_primary, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_cart.png')} /> : <Image style={{ tintColor: Colors.brown_bodyText, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_cart.png')} />
                    } else if (route.name === 'Favorite') {
                        return focused ? <Image style={{ tintColor: Colors.orange_primary, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_heart.png')} /> : <Image style={{ tintColor: Colors.brown_bodyText, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_heart.png')} />
                    } else if (route.name === 'Account') {
                        return focused ? <Image style={{ tintColor: Colors.orange_primary, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_account.png')} /> : <Image style={{ tintColor: Colors.brown_bodyText, width: 18, height: 18, resizeMode: 'contain' }} source={require('../../assets/images/ic_account.png')} />
                    }

                },
                tabBarActiveTintColor: Colors.orange_primary,
                tabBarInactiveTintColor: Colors.brown_bodyText,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.white,
                    paddingTop: 8,
                    paddingBottom: 8,
                    height: 60,
                    borderWidth: 0
                    // borderTopRightRadius: 20,
                    // borderTopLeftRadius: 20
                },
                tabBarLabelStyle: { fontSize: 14, fontFamily: Fonts.font_600 },
                tabBarBackground: () => (
                    <View style={{ flex: 1, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={[styles.boxShadow,
                        {
                            width: "100%",
                            height: 60,
                            // backgroundColor: Colors.brown_bodyText,


                        }]} />
                    </View>
                )
            })}
            sceneContainerStyle={{ backgroundColor: '#FFF' }}
        >
            <Tab.Screen name="Home" component={DetailHome} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Account" component={Account} />
           
        </Tab.Navigator>
    )
}
const Users = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator>
    )
}

const Welcomes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Begin'>
            <Stack.Screen name="Begin" component={Welcome} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="SignPass" component={SignPass} />
            <Stack.Screen name="SignCode" component={SignCode} />
        </Stack.Navigator>
    )
}

const Address = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Address'>
            <Stack.Screen name="Address" component={AddressMain} />
            <Stack.Screen name="Edit" component={AddressEdit} />
            <Stack.Screen name="Add" component={AddressAdd} />
        </Stack.Navigator>
    )
}
const Profiles = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName='Profile'>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Edit" component={EditProfile} />
            <Stack.Screen name="ChangePass" component={ChangePassword} />
            <Stack.Screen name="MyCard" component={My_card} />
            <Stack.Screen name='AddCard' component={New_cards} />
            <Stack.Screen name="Logout" component={SignIn} />

        </Stack.Navigator>
    )
}

const Categories = () => {

}

const Home = () => {
    return (
        <Stack.Navigator initialRouteName='Wel' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Wel'component={Welcomes}/>
            <Stack.Screen name='HomeTab' component={HomeTab}></Stack.Screen>
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProfileMain" component={Profiles} />
            <Stack.Screen name='AddressMain' component={Address} />
            <Stack.Screen name='Orders' component={Orders} />
            <Stack.Screen name='Payment' component={Payment} />

        </Stack.Navigator>

    )


}
const AppNavigator = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Home></Home>
            </NavigationContainer>
        </View>

    )
}

export default AppNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
})