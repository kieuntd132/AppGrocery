import { StyleSheet, Text, View, Image, Pressable, ScrollView, Switch, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Fonts } from '../../Constant/Font'
import Collapsible from 'react-native-collapsible';

import DatePicker from 'react-native-date-picker'
import { Colors } from '../../Constant/Colors'
import ButtonApp from '../components/ButtonApp';
import store from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../redux/action/action';
import { useNavigation } from '@react-navigation/native';
const Payment = () => {
  const data = useSelector(store => store.rootStore);
  const dispatch = useDispatch();

  const [tickT, setTickT] = useState(true);
  const [tickB, setTickB] = useState(false);
  const [subPay, setSubPay] = useState("137");
  const [faxPay, setFaxPay] = useState("4.50");
  const [deliPrice, setDeliPrice] = useState("5.00");
  const [textSearch, setTextSearch] = useState("141.5");
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
  const [gio, setGio] = useState("");
  const [date, setDate] = useState(new Date())
  const [ngay, setNgay] = useState("");
  const [open, setOpen] = useState(false)

  let dateFormat = date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear();

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };
  const toggleExpanded1 = () => {
    //Toggling the state of single Collapsible
    setCollapsed1(!collapsed1);
  };

  const SetTime = (props) => {
    const list = useSelector(store => store.rootStore.user.click);
    const select = useSelector(store => store.rootStore.user.click[Number(props?.value.key) - 1].onFocus);
    return (
      <Pressable onPress={() => {
        dispatch(updateTime(props?.value));

      }}
        style={!select ? styles.changeTime
          : styles.selectTime}>
        <Text style={{ color: '#6D3805', fontFamily: Fonts.font_400, textAlign: 'center' }}>
          {props?.value.value}
        </Text>
      </Pressable>
    )
  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Custom Toolbar */}
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.icBack} onPress={()=> navigation.goBack()}>
          <Image style={{width: 9, height: 14}} source={require('../../../assets/images/ic-back.png')} />
        </TouchableOpacity>
        <Text style={styles.textToolbar}>Payment</Text>
      </View>
      {/* Container Screen */}

      <ScrollView style={{ flex: 1, paddingTop: 20 }} showsVerticalScrollIndicator={false}>
        {/* Location */}
        <View style={[styles.boxItem, { marginTop: 0 }]}>
          <View style={styles.boxLocation}>
            <Text style={styles.txtDelivery}>Delivery Location</Text>
            <Pressable >
              <Text style={styles.txtChange}>Change</Text>
            </Pressable>
          </View>
          <View style={styles.boxDetailLocation}>
            <Image style={styles.icLocation} source={require('../../../assets/images/ic-location-pm.png')} />
            <Text style={styles.txtDetailLocation}>Floor 4, Kartini Tower No {'\n'}43 Lumajang, Jawa Timur</Text>
          </View>
        </View>

        {/* Date and Times */}
        <View style={styles.boxItem}>
          <Text style={styles.txtDelivery}>Expected date & Time</Text>
          <Pressable
            style={styles.boxPickerDate}
            onPress={() => setOpen(true)}>
            <Image style={styles.icDate} source={require('../../../assets/images/ic-date-pm.png')} />
            <Text style={styles.txtDate}>
              {
                ngay == "" ? "Select Date" : dateFormat
              }
            </Text>
            <Image style={styles.icDate} source={require('../../../assets/images/ic-bottom-pm.png')} />
          </Pressable>
          <DatePicker
            modal={true}
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
              setNgay(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
            style={{ backgroundColor: Colors.brown_bodyText }}
          />


          <View>
            <View style={styles.boxTime}>
              {
                Data.map(item => <SetTime value={item} key={item.key} />)
              }

            </View>
          </View>
        </View>

        {/* In-Store Pick Up */}
        <View>
          {/* Title box In-Store */}
          <View style={[styles.boxPickerDate, { marginBottom: 0 }]}>
            <Text style={styles.txtInStore}>In-Store Pick Up</Text>
            <Text style={[styles.txtInStore, { fontSize: 18 }]}>FREE</Text>
          </View>

          <View>
            {/*Code for Single Collapsible Start*/}
            <TouchableOpacity onPress={toggleExpanded}>
              <View style={{ marginBottom: 30, marginTop: 10, marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, color: '#6D3805', fontWeight: Fonts.font_400 }}>Some Stores May Be Temporarily {'\n'}Unavalable.</Text>
                <Image
                  style={{ marginRight: 10 }}
                  source={
                    !collapsed ?
                      require('../../../assets/images/ic-bottom-pm.png')
                      :
                      require('../../../assets/images/ic-right-pm.png')
                  } />

              </View>
            </TouchableOpacity>
            {/*Content of Single Collapsible*/}
            <Collapsible collapsed={collapsed} align="center">
              <View>
                <View style={styles.viewSearch}>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Image style={styles.searchIcon} source={require('../../../assets/images/ic_search.png')}></Image>
                  </TouchableOpacity>
                  <TextInput
                    onChangeText={setTextSearch}
                    style={styles.SearchBar}
                    placeholder="Search For Town, Street, Zip Code..."
                  ></TextInput>
                </View>
                <View style={styles.boxItem}>
                  <View style={styles.titlePrice}>
                    <View>
                      <Text style={styles.txtAdress}>Goteborg {'\n'}Arkaden</Text>
                      <Text style={[styles.txtAdress, { marginTop: 10, fontWeight: 'normal' }]}>1.4 MI</Text>
                    </View>
                    <Image
                      style={{ marginRight: 10 }}
                      source={require('../../../assets/images/ic-right-pm.png')} />
                  </View>
                  <View style={{ borderBottomWidth: 1, borderColor: '#6D38051C', marginTop: 16, marginBottom: 16 }} />
                  <View style={styles.titlePrice}>
                    <View>
                      <Text style={styles.txtAdress}>Kungsbacka {'\n'}Kungsmassan</Text>
                      <Text style={[styles.txtAdress, { marginTop: 10, fontWeight: 'normal' }]}>1.7 MI</Text>
                    </View>
                    <Image
                      style={{ marginRight: 10 }}
                      source={require('../../../assets/images/ic-right-pm.png')} />
                  </View>
                </View>
              </View>
            </Collapsible>
            {/*Code for Single Collapsible Ends*/}
          </View>

        </View>

        {/* See Items */}
        <Pressable
          style={styles.boxSeeItem}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ marginLeft: 10 }} source={require('../../../assets/images/ic-cart-pm.png')} />
            <Text style={styles.txtDelivery}>See Items</Text>
          </View>
          <Image style={{ marginRight: 20 }} source={require("../../../assets/images/ic-next-pm.png")} />
        </Pressable>


        {/* Payment Method  */}
        <View style={styles.boxItem}>
          <Text style={styles.txtDelivery}>Payment Method</Text>
          <View style={styles.txtChildPayMethod}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ marginBottom: 10 }} source={require('../../../assets/images/ic-applePay-pm.png')} />
              <Text style={[styles.titlePay, { fontSize: 16, marginTop: 0 }]}>Apple Pay</Text>
            </View>
            <Pressable style={styles.icLocation} onPress={() => { setTickT(true); setTickB(false) }}>
              {
                tickT ?
                  <Image source={require('../../../assets/images/ic-tick-pm.png')} />
                  :
                  <View></View>

              }

            </Pressable>
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: '#6D38051C' }} />

          <View style={styles.txtChildPayMethod}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{}} source={require('../../../assets/images/ic-dola-pm.png')} />
              <Text style={[styles.titlePay, { fontSize: 16, marginTop: 0 }]}>Apple Pay</Text>
            </View>
            <Pressable style={styles.icLocation} onPress={() => { setTickT(false); setTickB(true) }}>
              {
                tickB ?
                  <Image source={require('../../../assets/images/ic-tick-pm.png')} />
                  :
                  <View></View>

              }

            </Pressable>
          </View>
        </View>

        {/* Order Sammery */}
        <View style={styles.boxItem}>
          <Text style={styles.txtDelivery}>Order Sammery</Text>
          <View style={styles.titlePrice}>
            <Text style={styles.titlePay}>Subtotal</Text>
            <Text style={styles.titlePay}>${subPay}</Text>
          </View>

          <View style={styles.titlePrice}>
            <Text style={styles.titlePay}>Fax</Text>
            <Text style={styles.titlePay}>${faxPay}</Text>
          </View>
          <View style={styles.titlePrice}>
            <Text style={styles.titlePay}>Delivery Price</Text>
            <Text style={styles.titlePay}>${deliPrice}</Text>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: '#6D38051C' }} />
          <View style={styles.titlePrice}>
            <Text style={[styles.titlePay, { fontWeight: '700' }]}>Total:</Text>
            <Text style={[styles.titlePay, { fontWeight: '700' }]}>${deliPrice * 1 + faxPay * 1 + subPay * 1}</Text>
          </View>
        </View>
        <View style={{ marginTop: 50, marginBottom: 30 }}>
          <ButtonApp type={'Fill'} text={`Checkout $ ${deliPrice * 1 + faxPay * 1 + subPay * 1}`} />
        </View>
      </ScrollView>
    </View>

  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 16,
    paddingEnd: 16,
    backgroundColor: Colors.white
  },
  titlePay: {
    fontSize: 18,
    fontWeight: Fonts.font_400,
    color: '#6D3805',
    marginTop: 10,
    marginLeft: 10
  }
  ,
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  icBack: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  textToolbar: {
    fontSize: 24,
    color: Colors.orange_primary,
    fontFamily: Fonts.font_700,
  },
  boxLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtChange: {
    fontFamily: Fonts.font_400,
    fontSize: 17,
    color: '#FF5E00', fontWeight: '400',
    marginEnd: 10
  },
  txtDetailLocation: {
    fontFamily: Fonts.font_400,
    fontSize: 15,
    marginLeft: 15
  },

  txtDelivery: {
    fontFamily: Fonts.font_700,
    fontSize: 18,
    fontWeight: '700',
    color: '#6D3805',
    marginLeft: 10
  },
  boxDetailLocation: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  icLocation: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  boxItem: {
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
    padding: 13,
    marginTop: 16
  },
  boxPickerDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.white,
    margin: 10,

  },
  icDate: {
    marginLeft: 16,
    marginRight: 10,
    marginTop: 16,
    marginBottom: 16
  },
  txtDate: {
    flex: 1,
    fontFamily: Fonts.font_400,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'stretch',
    textAlignVertical: 'center'
  },

  boxTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  changeTime: {
    backgroundColor: Colors.white,
    width: 94,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  selectTime: {
    backgroundColor: Colors.orange_primary,
    width: 94,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  txtInStore: {
    color: '#6D3805',
    fontFamily: Fonts.font_700,
    fontSize: 22
  },
  txtAdress: {
    color: '#6D3805',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: Fonts.font_400
  },

  viewSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fillTextInput,
    borderRadius: 5,
    marginBottom: 16,
    height: 50
  },
  SearchBar: {
    paddingEnd: 27,
    paddingTop: 14,
    paddingBottom: 14,
    paddingStart: 8,
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: Fonts.font_400,
    color: Colors.placeholder,
    borderRadius: 10,
    textTransform: 'capitalize',
    flex: 1

  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 15
  },
  boxSeeItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF4E9',
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 16
  },
  txtChildPayMethod: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titlePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

})
const Data = [
  { key: '1', value: '8 AM - 11 AM', onFocus: false },
  { key: '2', value: '11 AM - 13 PM', onFocus: false },
  { key: '3', value: '13 PM - 15 PM', onFocus: false },
  { key: '4', value: '15 PM - 17 PM', onFocus: false },
  { key: '5', value: '17 PM - 19 PM', onFocus: false },
  { key: '6', value: '19 PM - 21 PM', onFocus: false },
]
const CONTENT = [
  {
    title: 'Terms and Conditions',
    content:
      'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
  },
  {
    title: 'Privacy Policy',
    content:
      'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
  },
  {
    title: 'Return Policy',
    content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
];
//To make the selector (Something like tabs)
const SELECTORS = [
  { title: 'T&C', value: 0 },
  { title: 'Privacy Policy', value: 1 },
  { title: 'Return Policy', value: 2 },
  { title: 'Reset all' },
];
