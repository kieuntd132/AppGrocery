import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Pressable,
    ToastAndroid
} from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import FastImage from 'react-native-fast-image'
import Toolbar from '../../components/Toolbar'
import { Fonts } from '../../../Constant/Font';
import { Colors } from '../../../Constant/Colors';

const Favorite = () => {
    const [close, setclose] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.textToolBar}>Favorite</Text>
            </View>
            <SwipeListView
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <Item data={item} />}
                renderHiddenItem={({ item }) => <HideItem data={item}
                    onPress={() => { ToastAndroid.show('Delete item', ToastAndroid.SHORT) }} />}
                rightOpenValue={-71}
                onSwipeValueChange={(item) => { }}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
                style={{ marginTop: 16 }} />
        </View >
    )
}

export default Favorite

const onRowDidOpen = rowKey => {
    // console.log('This row opened', rowKey);
};

const Item = (props) => {
    const { data } = props;
    return (
        <Pressable style={styles.itemList} android_ripple={{ color: Colors.fillTextInput }}>
            <View style={{padding: 3}}>
                {/* <FastImage
                    style={styles.imageProduct}
                    source={{
                        uri: data?.image,
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.high,
                    }}
                /> */}
                <Image style={styles.imageProduct} source={{uri: data?.image}}/>
            </View>
            <View style={styles.infoPorduct}>
                <Text style={styles.nameProduct}>{data?.name}</Text>
                <View style={styles.bottomProduct}>
                    <TouchableOpacity style={styles.cart} activeOpacity={0.5}>
                        <Image style={styles.iconCart} source={require('../../../../assets/images/ic-cart.png')} />
                        <Text style={styles.addToCart}>Add to cart</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>${data?.price} kg</Text>
                </View>
            </View>
        </Pressable>
    )
}

const HideItem = (props) => {
    const { data, onPress } = props;
    return (
        <Pressable
            style={styles.itemDel}
            android_ripple={{ color: Colors.placeholder }}
            onPress={onPress}>
            <Image style={styles.iconDel} source={require('../../../../assets/images/ic-btn-delete.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingStart: 14,
        paddingEnd: 14
    },
    toolbar: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    textToolBar: {
        color: Colors.orange_primary,
        fontFamily: Fonts.font_700,
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: -0.17,
        alignSelf: 'center',
        marginStart: 10,
        marginBottom: 16,
    },
    itemList: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(109, 56, 5, 0.09)',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: Colors.white
    },
    imageProduct: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    infoPorduct: {
        justifyContent: 'space-around',
        flex: 1,
        marginStart: 20
    },
    nameProduct: {
        fontFamily: Fonts.font_700,
        color: Colors.brown_bodyText,
        fontSize: 18,
        lineHeight: 22
    },
    bottomProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cart: {
        flexDirection: 'row'
    },
    iconCart: {
        width: 21,
        height: 21
    },
    addToCart: {
        marginStart: 8,
        fontFamily: Fonts.font_400,
        color: Colors.orange_primary,
        fontSize: 14,
        lineHeight: 17
    },
    price: {
        fontSize: 18,
        fontFamily: Fonts.font_400,
        color: Colors.brown_bodyText,
        lineHeight: 22
    },
    itemDel: {
        backgroundColor: '#A42B32',
        alignSelf: 'flex-end',
        width: 71,
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconDel: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

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