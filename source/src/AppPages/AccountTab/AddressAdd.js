import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../../components/Toolbar'
import AddressItem from './AddressItem'
import DropDownPicker from "react-native-dropdown-picker";
import TextInputApp from '../../components/TextInputApp'
import ButtonApp from '../../components/ButtonApp'
import { Fonts } from '../../../Constant/Font';
import { Colors } from '../../../Constant/Colors';

const AddressAdd = (props) => {
  const { navigation } = props;
  const [Address_Title, setAddress_Title] = useState('')
  const [Name_Surname, setName_Surname] = useState('')

  const [Address, setAddress] = useState('')
  const [CityValue, setCityValue] = useState("")
  const [CityOpen, setCityOpen] = useState(false);
  
  const [City, setCity] = useState([
    {
      label: "Hà Nội",
      value: "ha-noi",
      "type": "thanh-pho",
      "name_with_type": "Thành phố Hà Nội",
      "code": "01"
    },
    {
      label: "Hà Giang",
      value: "ha-giang",
      "type": "tinh",
      "name_with_type": "Tỉnh Hà Giang",
      "code": "02"
    },
    {
      label: "Cao Bằng",
      value: "cao-bang",
      "type": "tinh",
      "name_with_type": "Tỉnh Cao Bằng",
      "code": "04"
    },
    {
      label: "Bắc Kạn",
      value: "bac-kan",
      "type": "tinh",
      "name_with_type": "Tỉnh Bắc Kạn",
      "code": "06"
    },
    {
      label: "Tuyên Quang",
      value: "tuyen-quang",
      "type": "tinh",
      "name_with_type": "Tỉnh Tuyên Quang",
      "code": "08"
    },
    {
      label: "Lào Cai",
      value: "lao-cai",
      "type": "tinh",
      "name_with_type": "Tỉnh Lào Cai",
      "code": "10"
    },
    {
      label: "Điện Biên",
      value: "dien-bien",
      "type": "tinh",
      "name_with_type": "Tỉnh Điện Biên",
      "code": "11"
    },
    {
      label: "Lai Châu",
      value: "lai-chau",
      "type": "tinh",
      "name_with_type": "Tỉnh Lai Châu",
      "code": "12"
    },
    {
      label: "Sơn La",
      value: "son-la",
      "type": "tinh",
      "name_with_type": "Tỉnh Sơn La",
      "code": "14"
    },
    {
      label: "Yên Bái",
      value: "yen-bai",
      "type": "tinh",
      "name_with_type": "Tỉnh Yên Bái",
      "code": "15"
    },
    {
      label: "Hoà Bình",
      value: "hoa-binh",
      "type": "tinh",
      "name_with_type": "Tỉnh Hoà Bình",
      "code": "17"
    },
    {
      label: "Thái Nguyên",
      value: "thai-nguyen",
      "type": "tinh",
      "name_with_type": "Tỉnh Thái Nguyên",
      "code": "19"
    },
    {
      label: "Lạng Sơn",
      value: "lang-son",
      "type": "tinh",
      "name_with_type": "Tỉnh Lạng Sơn",
      "code": "20"
    },
    {
      label: "Quảng Ninh",
      value: "quang-ninh",
      "type": "tinh",
      "name_with_type": "Tỉnh Quảng Ninh",
      "code": "22"
    },
    {
      label: "Bắc Giang",
      value: "bac-giang",
      "type": "tinh",
      "name_with_type": "Tỉnh Bắc Giang",
      "code": "24"
    },
    {
      label: "Phú Thọ",
      value: "phu-tho",
      "type": "tinh",
      "name_with_type": "Tỉnh Phú Thọ",
      "code": "25"
    },
    {
      label: "Vĩnh Phúc",
      value: "vinh-phuc",
      "type": "tinh",
      "name_with_type": "Tỉnh Vĩnh Phúc",
      "code": "26"
    },
    {
      label: "Bắc Ninh",
      value: "bac-ninh",
      "type": "tinh",
      "name_with_type": "Tỉnh Bắc Ninh",
      "code": "27"
    },
    {
      label: "Hải Dương",
      value: "hai-duong",
      "type": "tinh",
      "name_with_type": "Tỉnh Hải Dương",
      "code": "30"
    },
    {
      label: "Hải Phòng",
      value: "hai-phong",
      "type": "thanh-pho",
      "name_with_type": "Thành phố Hải Phòng",
      "code": "31"
    },
    {
      label: "Hưng Yên",
      value: "hung-yen",
      "type": "tinh",
      "name_with_type": "Tỉnh Hưng Yên",
      "code": "33"
    },
    {
      label: "Thái Bình",
      value: "thai-binh",
      "type": "tinh",
      "name_with_type": "Tỉnh Thái Bình",
      "code": "34"
    },
    {
      label: "Hà Nam",
      value: "ha-nam",
      "type": "tinh",
      "name_with_type": "Tỉnh Hà Nam",
      "code": "35"
    },
    {
      label: "Nam Định",
      value: "nam-dinh",
      "type": "tinh",
      "name_with_type": "Tỉnh Nam Định",
      "code": "36"
    },
    {
      label: "Ninh Bình",
      value: "ninh-binh",
      "type": "tinh",
      "name_with_type": "Tỉnh Ninh Bình",
      "code": "37"
    },
    {
      label: "Thanh Hóa",
      value: "thanh-hoa",
      "type": "tinh",
      "name_with_type": "Tỉnh Thanh Hóa",
      "code": "38"
    },
    {
      label: "Nghệ An",
      value: "nghe-an",
      "type": "tinh",
      "name_with_type": "Tỉnh Nghệ An",
      "code": "40"
    },
    {
      label: "Hà Tĩnh",
      value: "ha-tinh",
      "type": "tinh",
      "name_with_type": "Tỉnh Hà Tĩnh",
      "code": "42"
    },
    {
      label: "Quảng Bình",
      value: "quang-binh",
      "type": "tinh",
      "name_with_type": "Tỉnh Quảng Bình",
      "code": "44"
    },
    {
      label: "Quảng Trị",
      value: "quang-tri",
      "type": "tinh",
      "name_with_type": "Tỉnh Quảng Trị",
      "code": "45"
    },
    {
      label: "Thừa Thiên Huế",
      value: "thua-thien-hue",
      "type": "tinh",
      "name_with_type": "Tỉnh Thừa Thiên Huế",
      "code": "46"
    },
    {
      label: "Đà Nẵng",
      value: "da-nang",
      "type": "thanh-pho",
      "name_with_type": "Thành phố Đà Nẵng",
      "code": "48"
    },
    {
      label: "Quảng Nam",
      value: "quang-nam",
      "type": "tinh",
      "name_with_type": "Tỉnh Quảng Nam",
      "code": "49"
    },
    {
      label: "Quảng Ngãi",
      value: "quang-ngai",
      "type": "tinh",
      "name_with_type": "Tỉnh Quảng Ngãi",
      "code": "51"
    },
    {
      label: "Bình Định",
      value: "binh-dinh",
      "type": "tinh",
      "name_with_type": "Tỉnh Bình Định",
      "code": "52"
    },
    {
      label: "Phú Yên",
      value: "phu-yen",
      "type": "tinh",
      "name_with_type": "Tỉnh Phú Yên",
      "code": "54"
    },
    {
      label: "Khánh Hòa",
      value: "khanh-hoa",
      "type": "tinh",
      "name_with_type": "Tỉnh Khánh Hòa",
      "code": "56"
    },
    {
      label: "Ninh Thuận",
      value: "ninh-thuan",
      "type": "tinh",
      "name_with_type": "Tỉnh Ninh Thuận",
      "code": "58"
    },
    {
      label: "Bình Thuận",
      value: "binh-thuan",
      "type": "tinh",
      "name_with_type": "Tỉnh Bình Thuận",
      "code": "60"
    },
    {
      label: "Kon Tum",
      value: "kon-tum",
      "type": "tinh",
      "name_with_type": "Tỉnh Kon Tum",
      "code": "62"
    },
    {
      label: "Gia Lai",
      value: "gia-lai",
      "type": "tinh",
      "name_with_type": "Tỉnh Gia Lai",
      "code": "64"
    },
    {
      label: "Đắk Lắk",
      value: "dak-lak",
      "type": "tinh",
      "name_with_type": "Tỉnh Đắk Lắk",
      "code": "66"
    },
    {
      label: "Đắk Nông",
      value: "dak-nong",
      "type": "tinh",
      "name_with_type": "Tỉnh Đắk Nông",
      "code": "67"
    },
    {
      label: "Lâm Đồng",
      value: "lam-dong",
      "type": "tinh",
      "name_with_type": "Tỉnh Lâm Đồng",
      "code": "68"
    },
    {
      label: "Bình Phước",
      value: "binh-phuoc",
      "type": "tinh",
      "name_with_type": "Tỉnh Bình Phước",
      "code": "70"
    },
    {
      label: "Tây Ninh",
      value: "tay-ninh",
      "type": "tinh",
      "name_with_type": "Tỉnh Tây Ninh",
      "code": "72"
    },
    {
      label: "Bình Dương",
      value: "binh-duong",
      "type": "tinh",
      "name_with_type": "Tỉnh Bình Dương",
      "code": "74"
    },
    {
      label: "Đồng Nai",
      value: "dong-nai",
      "type": "tinh",
      "name_with_type": "Tỉnh Đồng Nai",
      "code": "75"
    },
    {
      label: "Bà Rịa - Vũng Tàu",
      value: "ba-ria-vung-tau",
      "type": "tinh",
      "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
      "code": "77"
    },
    {
      label: "Hồ Chí Minh",
      value: "ho-chi-minh",
      "type": "thanh-pho",
      "name_with_type": "Thành phố Hồ Chí Minh",
      "code": "79"
    },
    {
      label: "Long An",
      value: "long-an",
      "type": "tinh",
      "name_with_type": "Tỉnh Long An",
      "code": "80"
    },
    {
      label: "Tiền Giang",
      value: "tien-giang",
      "type": "tinh",
      "name_with_type": "Tỉnh Tiền Giang",
      "code": "82"
    },
    {
      label: "Bến Tre",
      value: "ben-tre",
      "type": "tinh",
      "name_with_type": "Tỉnh Bến Tre",
      "code": "83"
    },
    {
      label: "Trà Vinh",
      value: "tra-vinh",
      "type": "tinh",
      "name_with_type": "Tỉnh Trà Vinh",
      "code": "84"
    },
    {
      label: "Vĩnh Long",
      value: "vinh-long",
      "type": "tinh",
      "name_with_type": "Tỉnh Vĩnh Long",
      "code": "86"
    },
    {
      label: "Đồng Tháp",
      value: "dong-thap",
      "type": "tinh",
      "name_with_type": "Tỉnh Đồng Tháp",
      "code": "87"
    },
    {
      label: "An Giang",
      value: "an-giang",
      "type": "tinh",
      "name_with_type": "Tỉnh An Giang",
      "code": "89"
    },
    {
      label: "Kiên Giang",
      value: "kien-giang",
      "type": "tinh",
      "name_with_type": "Tỉnh Kiên Giang",
      "code": "91"
    },
    {
      label: "Cần Thơ",
      value: "can-tho",
      "type": "thanh-pho",
      "name_with_type": "Thành phố Cần Thơ",
      "code": "92"
    },
    {
      label: "Hậu Giang",
      value: "hau-giang",
      "type": "tinh",
      "name_with_type": "Tỉnh Hậu Giang",
      "code": "93"
    },
    {
      label: "Sóc Trăng",
      value: "soc-trang",
      "type": "tinh",
      "name_with_type": "Tỉnh Sóc Trăng",
      "code": "94"
    },
    {
      label: "Bạc Liêu",
      value: "bac-lieu",
      "type": "tinh",
      "name_with_type": "Tỉnh Bạc Liêu",
      "code": "95"
    },
    {
      label: "Cà Mau",
      value: "ca-mau",
      "type": "tinh",
      "name_with_type": "Tỉnh Cà Mau",
      "code": "96"
    }
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
        <View style={{ marginBottom: 64, padding:20 }}>
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
            maxHeight={300}
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