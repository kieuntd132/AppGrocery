import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toolbar from '../../components/Toolbar'
import ButtonApp from '../../components/ButtonApp'
import ProductItem from './Items/ProductItem'
import { SwipeListView } from 'react-native-swipe-list-view'
import HiddenItem from './Items/HiddenItem'
const data = [
    {
        "_id": "1",
        "image": "https://khothietke.net/wp-content/uploads/2021/04/Khothietke.net-PNG-02439.png",
        "name": "Táo đỏ",
        "number": "2",
        "price": "9.98",
        "weight": "kg"
    },
    {
        "_id": "2",
        "image": "https://khothietke.net/wp-content/uploads/2021/04/PNGKhovector.net-02105.png",
        "name": "Cam",
        "number": "1",
        "price": "4.99",
        "weight": "kg"
    },
    {
        "_id": "3",
        "image": "https://fujimart.vn/image/cache/catalog/B%C3%A1nh%20t%C6%B0%C6%A1i%20Fuji/1497432515-149735601523653-an-xoai-502x502.png",
        "name": "Xoài",
        "number": "1",
        "price": "5.99",
        "weight": "kg"
    },
    {
        "_id": "4",
        "image": "https://api.nongthonviet.com.vn/media/60a63c8d5f2fd34dccbb64cd_images1373000_Longan2.png",
        "name": "Nhãn",
        "number": "4",
        "price": "23.96",
        "weight": "kg"
    },
]
const Cart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolBar}>
            <Toolbar type="goBack" title="Cart"></Toolbar>
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
                showsVerticalScrollIndicator={false}
            >

            </SwipeListView>
     
            <View style={styles.buttonContainer}>
            <ButtonApp text="CheckOut" type="Fill"></ButtonApp>
            </View>
          
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    toolBar:{
        paddingHorizontal:20
    },
    list: {

    },
    buttonContainer:{
        paddingHorizontal:16,
        marginBottom: 15
    }
})