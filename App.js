import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'


import Payment from './source/src/screenDemo/Payment';

import { Provider } from 'react-redux';
import store from './source/redux/store';
import ChangePassword from './source/src/AppPages/AccountTab/ChangePassword';
import SignCode from './source/src/LoginPages/SignCode';
import SignPass from './source/src/LoginPages/SignPass';
import Welcome from './source/src/LoginPages/Welcome';
import Shop from './source/src/AppPages/HomeTab/Shop';
import ProductDetail from './source/src/AppPages/HomeTab/ProductDetail';
import Friut from './source/src/AppPages/ExploreTab/Friut';
import Explore from './source/src/AppPages/ExploreTab/Explore';
import Cart from './source/src/AppPages/CartTab/Cart';
import Items from './source/src/AppPages/CartTab/Items';
import OrderSuccessful from './source/src/AppPages/CartTab/OrderSuccessful';
import OrderFailed from './source/src/AppPages/CartTab/OrderFailed';
import Favorite from './source/src/AppPages/FavoriteTab/Favorite';
import SignUp from './source/src/LoginPages/SignUp';
import SignIn from './source/src/LoginPages/SignIn';
import EditProfile from './source/src/AppPages/AccountTab/EditProfile';
import FavoriteEmpty from './source/src/AppPages/FavoriteTab/FavoriteEmpty';
import StackNav from './source/src/AppPages/AccountTab/StackNav';
import My_card from './source/src/AppPages/AccountTab/My_card';
import New_cards from './source/src/AppPages/AccountTab/New_cards';
import Account from './source/src/AppPages/AccountTab/Account';
import Profile from './source/src/AppPages/AccountTab/Profile';
import Orders from './source/src/AppPages//AccountTab/Orders';
import AppNavigator from './source/src/AppNavigator';


const App = () => {
  return (

    <Provider store={store}>
      <View style={styles.container}>
        {/* <Payment /> */}
        {/* <ChangePassword></ChangePassword> */}
        {/* <SignCode></SignCode> */}
        {/* <SignPass></SignPass> */}
        {/* <Welcome></Welcome> */}
        {/* <Shop> </Shop> */}
        {/* <ProductDetail></ProductDetail> */}
        {/* <Products></Products> */}
        {/* <Friut></Friut> */}
        {/* <Explore></Explore> */}
        {/* <Cart></Cart> */}
        {/* <Items></Items> */}
        {/* <OrderSuccessful></OrderSuccessful> */}
        {/* <OrderFailed></OrderFailed> */}
        {/* <Favorite></Favorite> */}
        {/* <SignUp></SignUp> */}
        {/* <SignIn></SignIn> */}
        {/* <EditProfile></EditProfile> */}
        {/* <FavoriteEmpty></FavoriteEmpty> */}
        {/* <StackNav></StackNav> */}
        {/* <My_card></My_card> */}
        {/* <New_cards></New_cards> */}
        {/* <Account></Account> */}
        {/* <Profile></Profile> */}
        {/* <Orders></Orders> */}
        <AppNavigator></AppNavigator>
        <StatusBar barStyle={'dark-content'} backgroundColor={"#FFF"}></StatusBar>
      </View>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})