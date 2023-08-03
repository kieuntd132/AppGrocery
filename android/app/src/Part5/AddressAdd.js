import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../../../../source/components/Toolbar'
import AddressItem from './AddressItem'
import DropDownPicker from "react-native-dropdown-picker";
import TextInputApp from '../../../../source/components/TextInputApp'
import ButtonApp from '../../../../source/components/ButtonApp'
import { Fonts } from '../../../../source/Constant/Font';
import { Colors } from '../../../../source/Constant/Colors';

const AddressAdd = (props) => {
  const { navigation } = props;
  const [Address_Title, setAddress_Title] = useState('')
  const [Name_Surname, setName_Surname] = useState('')

  const [Address, setAddress] = useState('')
  const [CityValue, setCityValue] = useState("")
  const [CityOpen, setCityOpen] = useState(false);
  const [City, setCity] = useState([
    // { label: "Hồ Chí Minh city", value: "HCM" },
    // { label: "Hà Lội", value: "HN" },
    // { label: "Đà Lẵng", value: "DL" },
  ])
  const goBack = () => {
    navigation.goBack();
  }

  const report = () => {
    console.log(Address_Title)
    console.log(Name_Surname)
    console.log(CityValue)
    console.log(Address)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between' }}>
      <View>
        <View style={{ marginBottom: 64, marginHorizontal: 20 }}>
          <Toolbar
            type={"goBack"}
            title={"Add Addresses"}
            onPressLeft={() => { goBack(); }}
            onPressRight={() => { console.log("alo"); }} /></View>
        <View style={styles.textInput}>
          <TextInputApp
            type={"Noicon"} placeholder={"Address Title"} onChangeText={setAddress_Title} />
        </View>
        <View style={styles.textInput}>
          <TextInputApp
            type={"Noicon"} placeholder={"Name Surname"} onChangeText={setName_Surname} />
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
            // onOpen={onGenderOpen}
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
            type={"Noicon"} placeholder={"Address"} onChangeText={setAddress} />
        </View>
      </View>

      <View style={{ marginBottom: 19, marginHorizontal: 16 }}>
        <ButtonApp type={"Fill"} text={"Add"}
          onPress={() => { report(); }} />
      </View>
    </View>
  )
}

export default AddressAdd

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