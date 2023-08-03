import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Toolbar from '../../../../source/components/Toolbar'
import AddressItem from './AddressItem'
const AddressMain = (props) => {
    const {navigation} = props;

    const gotoAdd = () =>{
        navigation.navigate('Add');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ marginBottom: 45, marginHorizontal: 20 }}>
                <Toolbar
                    type={"addRight"}
                    title={"Addresses"}
                    onPressLeft={() => { console.log("alo"); }}
                    onPressRight={() => { gotoAdd(); }} /></View>
            <ScrollView>
                {data.map((item) => <AddressItem key={item.id} data={item} navigation={navigation} />)}
            </ScrollView>
        </View>
    )
}

export default AddressMain

const styles = StyleSheet.create({})

const data = [
    {
        "id": "1",
        "Address_Title": "Home",
        "Name_Surname": "Một cái tên nào đấy",
        "City": "HCM",
        "Address": "Lungangen 6, 41722"
    },
    {
        "id": "2",
        "Address_Title": "Office",
        "Name_Surname": "Một cái tên nào đấy",
        "City": "HN",
        "Address": "Lungangen 6, 41722"
    },
]