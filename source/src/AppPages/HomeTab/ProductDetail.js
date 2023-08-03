import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Fonts } from '../../../../source/Constant/Font'
import { Colors } from '../../../../source/Constant/Colors'
import ButtonApp from '../../components/ButtonApp'
import Stepper from './Items/Stepper'
import HeartIcon from './Items/HeartIcon'
import SubContentItem from './Items/SubContentItem'
import ItemProduct from './Items/ItemProduct'
import { useNavigation } from '@react-navigation/native'
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
const ProductDetail = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.productDetailContainer}>
                <View style={styles.headerContainer}>
                    <Pressable style={{padding: 10}} onPress={() => navigation.goBack()}>
                        <Image style={styles.icBack} source={require('../../../../assets/images/ic-back.png')}></Image>
                    </Pressable>
                    <Image source={require('../../../../assets/images/img_inDetail.png')}></Image>
                </View>
                <View style={styles.productImageContainer}>
                    <Image style={styles.productImage} source={require('../../../../assets/images/img_productImage_sample.png')}></Image>
                </View>
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Original Mango</Text>
                    <View style={styles.productPriceContainer}>
                        <Text style={styles.productPrice}>${"3.00"}</Text>
                        <Text style={styles.productWeight}>/{"st"}</Text>
                    </View>

                    <Text style={styles.productDescription}>Golden Ripe Alphonsa mangoes delivered to your house in the most hygenic way ever... Best for eating plain but can also be made into shakes and cakes.</Text>
                </View>
                <View style={styles.stepperContainer}>
                    <Stepper value={1} type="large"></Stepper>
                    <HeartIcon></HeartIcon>
                </View>
                <View style={{ marginTop: 19, paddingHorizontal: 16 }}>
                    <ButtonApp type="Fill" text="Add To Cart"></ButtonApp>
                </View>

            </View>
            <View style={styles.subContentContainer}>
                <Text style={styles.subContentLabel}>You may also need</Text>
                <FlatList
                    style={styles.listView}
                    data={data}
                    renderItem={({ item }) => <SubContentItem data={item}></SubContentItem>}
                    keyExtractor={item => item._id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >

                </FlatList>
            </View>

        </ScrollView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,

    },
    icBack: {
        width: 8.49,
        height: 14,
        // marginTop: 32
    },
    productDetailContainer: {
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 20,
    },
    productImage: {
        width: 162,
        height: 110
    },

    productImageContainer: {
        alignItems: 'center',

    },
    productInfo: {
        marginTop: 106,
        paddingHorizontal: 14
    },
    productName: {
        fontFamily: Fonts.font_700,
        fontSize: 24,
        lineHeight: 28.8,
        color: Colors.brown_bodyText,

    },
    productPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    productPrice: {
        fontFamily: Fonts.font_400,
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: -0.17,
        color: Colors.brown_bodyText
    },
    productWeight: {
        fontFamily: Fonts.font_400,
        fontSize: 16,
        lineHeight: 19.2,
        letterSpacing: -0.17,
        color: Colors.brown_bodyText,
        marginStart: 3
    },
    productDescription: {
        fontFamily: Fonts.font_400,
        fontSize: 14,
        lineHeight: 16.8,
        color: Colors.brown_bodyText,
        paddingVertical: 10,
        marginTop: 8
    },
    stepperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        marginTop: 13
    },
    subContentContainer: {
        marginTop: 50.5,
        paddingBottom: 20,
        paddingEnd: 16
    },
    subContentLabel: {
        fontFamily: Fonts.font_700,
        fontSize: 18,
        color: Colors.brown_bodyText,
        paddingHorizontal: 18
    },
    listView: {
        marginTop: 16
    }

})