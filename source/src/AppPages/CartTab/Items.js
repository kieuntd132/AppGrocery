import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toolbar from '../../components/Toolbar'
import ButtonApp from '../../components/ButtonApp'
import ProductItem from './Items/ProductItem'
import { SwipeListView } from 'react-native-swipe-list-view'
import HiddenItem from './Items/HiddenItem'
const data =
    [
        {
            "_id": "1",
            "name": "Red Apple",
            "number": "2",
            "price": "9.98",
            "weight": "kg"
        },
        {
            "_id": "2",
            "name": "Orange",
            "number": "1",
            "price": "4.99",
            "weight": "kg"
        },
        {
            "_id": "3",
            "name": "Mango",
            "number": "1",
            "price": "5.99",
            "weight": "kg"
        },
        {
            "_id": "4",
            "name": "Mango",
            "number": "4",
            "price": "23.96",
            "weight": "kg"
        },
    ]
const Items = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
            <Toolbar type="goBack" title="Items"></Toolbar>
            </View>
          
            {/* <FlatList style={styles.list}
     data={data}
     renderItem={({item}) => <ProductItem data={item}></ProductItem>}
     keyExtractor={item=> item._id}
     >

     </FlatList> */}
            <SwipeListView
                data={data}
                renderItem={({ item }) => <ProductItem data={item}></ProductItem>}
                renderHiddenItem={({ item }) => <HiddenItem data={item}></HiddenItem>}
                rightOpenValue={-71} //mỗi khi mở thì item thụt về 71px
                keyExtractor={item=>item._id}
            >

            </SwipeListView>
           
        </View>
    )
}

export default Items

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {

    },
    toolbar:{
        paddingTop:32,
        paddingHorizontal:20
    }
})