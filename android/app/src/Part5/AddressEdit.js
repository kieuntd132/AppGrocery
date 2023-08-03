import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import Toolbar from '../../../../source/components/Toolbar'
import AddressItem from './AddressItem'
import DropDownPicker from "react-native-dropdown-picker";
import TextInputApp from '../../../../source/components/TextInputApp'
import ButtonApp from '../../../../source/components/ButtonApp'
import { Fonts } from '../../../../source/Constant/Font'
import { Colors } from '../../../../source/Constant/Colors'

const AddressEdit = (props) => {
  const { navigation, route } = props;
  const { data } = route.params
  const [Name_Surname, setName_Surname] = useState(data.Name_Surname)
  const [Address, setAddress] = useState(data.Address)
  const goBack = () => {
    navigation.goBack();
  }

  const [CityValue, setCityValue] = useState(data.City)
  const [CityOpen, setCityOpen] = useState(false);
  const [City, setCity] = useState([
    { label: "Hồ Chí Minh city", value: "HCM" },
    { label: "Hà Lội", value: "HN" },
    { label: "Đà Lẵng", value: "DL" },
  ])
  const onGenderOpen = useCallback(() => {
    setAddress_Title_Open(false);
  }, []);

  const [Address_Title_Value, setAddress_Title_Value] = useState(data.Address_Title)
  const [Address_Title_Open, setAddress_Title_Open] = useState(false)
  const [Address_Title, setAddress_Title] = useState([
    { label: "Home", value: "Home" },
    { label: "Office", value: "Office" },
  ])
  const onATOpen = useCallback(() => {
    setCityOpen(false);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between' }}>
      <View>
        <View style={{ marginBottom: 64, marginHorizontal: 20 }}>
          <Toolbar
            type={"goBack"}
            title={"Edit Addresses"}
            onPressLeft={() => { goBack(); }}
            onPressRight={() => { console.log("alo"); }} /></View>
        <View style={styles.textInput}>
        <DropDownPicker
            style={styles.holder}
            textStyle={styles.txtPass2}
            labelStyle={styles.txtPass2}
            placeholderStyle={styles.txtPass}
            listItemContainerStyle={[styles.holder, { borderRadius: 0 }]}
            dropDownContainerStyle={{ borderWidth: 0 }}

            open={Address_Title_Open}
            value={Address_Title_Value} //genderValue  
            defaultValue={Address_Title_Value}
            items={Address_Title}
            setOpen={setAddress_Title_Open}
            setValue={setAddress_Title_Value}
            setItems={setAddress_Title}
            placeholder="City"
            onOpen={onATOpen}
            zIndex={3000}
            zIndexInverse={1000}
            ArrowDownIconComponent={() => {
              return (
                <Image style={{ width: 7, height: 12 }}
                  source={require('../../../../assets/images/ic_arrowSide.png')}></Image>
              );
            }}
            ArrowUpIconComponent={() => {
              return (
                <Image style={{ width: 12, height: 7 }}
                  source={require('../../../../assets/images/ic_arrowDown.png')}></Image>
              );
            }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInputApp
            type={"Noicon"} value={Name_Surname} placeholder={"Name Surname"} onChangeText={setName_Surname} />
        </View>
        <View style={styles.textInput}>
          <DropDownPicker
            style={styles.holder}
            textStyle={styles.txtPass2}
            labelStyle={styles.txtPass2}
            placeholderStyle={styles.txtPass}
            listItemContainerStyle={[styles.holder, { borderRadius: 0 }]}
            dropDownContainerStyle={{ borderWidth: 0 }}

            open={CityOpen}
            value={CityValue} //genderValue  
            defaultValue={CityValue}
            items={City}
            setOpen={setCityOpen}
            setValue={setCityValue}
            setItems={setCity}
            placeholder="City"
            onOpen={onGenderOpen}
            zIndex={3000}
            zIndexInverse={1000}
            ArrowDownIconComponent={() => {
              return (
                <Image style={{ width: 7, height: 12 }}
                  source={require('../../../../assets/images/ic_arrowSide.png')}></Image>
              );
            }}
            ArrowUpIconComponent={() => {
              return (
                <Image style={{ width: 12, height: 7 }}
                  source={require('../../../../assets/images/ic_arrowDown.png')}></Image>
              );
            }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInputApp
            type={"Noicon"} value={Address} placeholder={"Address"} onChangeText={setAddress} />
        </View>
      </View>

      <View style={{ marginBottom: 19, marginHorizontal: 16 }}>
        <ButtonApp type={"Fill"} text={"Add"}
          onPress={() => { console.log(Address_Title + Name_Surname + City + Address); }} />
      </View>
    </View>
  )
}

export default AddressEdit

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 16, marginBottom: 30
  },
  txtPass: {
    fontSize: 16,
    fontFamily: Fonts.font_400,
    color: Colors.placeholder,
  },
  txtPass2: {
    fontSize: 16,
    fontFamily: Fonts.font_400,
    color: Colors.brown_bodyText,
  },
  holder: {
    backgroundColor: Colors.fillTextInput,
    paddingLeft: 27,
    paddingRight: 21,
    borderRadius: 5,
    borderWidth: 0,
  }
})