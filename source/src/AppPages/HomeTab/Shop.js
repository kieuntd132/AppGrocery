import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Toolbar from '../../components/Toolbar'
import { Colors } from '../../../Constant/Colors'
import SearchBar from '../../components/SearchBar'
import ItemType from './Items/ItemType'
import ItemProduct from './Items/ItemProduct'
import { Fonts } from '../../../Constant/Font'
import { useNavigation } from '@react-navigation/native'

const Shop = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonToolbar}>
                    <Image style={styles.iconBack} source={require('../../../../assets/images/ic-address.png')} />
                    <Text style={styles.textToolBar}>Lungangen</Text>
                </TouchableOpacity>
            </View>
            <SearchBar />
            <View style={styles.boxCategories}>
                <View style={styles.boxTitile}>
                    <Text style={styles.title}>Categories</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>
                <FlatList
                    data={dataTypes}
                    renderItem={({ item }) => <ItemType dataTypes={item} type={0} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.boxPopular}>
                <View style={styles.boxTitile}>
                    <Text style={styles.title}>Popular deals</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Fruit')} >
                        <Text style={styles.textSeeAll}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data_1}
                    renderItem={(item) => <ItemProduct dataProduct={item} type={0} />}
                    keyExtractor={item => item._id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                // numColumns= {2}
                />
            </View>
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingStart: 14,
        paddingEnd: 14
    },
    // toolbar
    toolbar: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonToolbar: {
        padding: 16,
        paddingTop: 0,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBack: {
        width: 16.88,
        height: 22.5,
    },
    textToolBar: {
        color: Colors.orange_primary,
        fontFamily: Fonts.font_700,
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: -0.17,
        alignSelf: 'center',
        marginStart: 10,
    },

    // body
    boxCategories: {
        marginTop: 34,
    },
    boxTitile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    title: {
        color: Colors.brown_bodyText,
        fontFamily: Fonts.font_700,
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 26,
        textTransform: 'capitalize',
    },
    textSeeAll: {
        color: Colors.orange_primary,
        fontFamily: Fonts.font_400,
        fontSize: 18,
        lineHeight: 21.6,
        textTransform: 'capitalize',
    },
    boxPopular: {
        marginTop: 53.17,
    }

})

const dataTypes = [
    {
        id: 1,
        name: 'Fruits',
        image: require('../../../../assets/images/img-typeFruit.png'),
    },
    {
        id: 2,
        name: 'Vegetables',
        image: require('../../../../assets/images/img-typeVegetable.png'),
    },
    {
        id: 3,
        name: 'Meat',
        image: require('../../../../assets/images/img-typeMeat.png'),
    },
    {
        id: 4,
        name: 'Fish',
        image: require('../../../../assets/images/img-typeFish.png'),
    },
    {
        id: 5,
        name: 'Sea food',
        image: require('../../../../assets/images/img-typeSeaFood.png'),
    },
    {
        id: 6,
        name: 'Juice',
        image: require('../../../../assets/images/img-typeJuice.png'),
    },
    {
        id: 7,
        name: 'Egg & Milk',
        image: require('../../../../assets/images/img-typeEgg.png'),
    },
    {
        id: 8,
        name: 'Ice cream',
        image: require('../../../../assets/images/img-typeIceCream.png'),
    },
    {
        id: 9,
        name: 'Cake',
        image: require('../../../../assets/images/img-typeCake.png'),
    },
]

const data_1 = [
    {
        _id: "1",
        image: "https://khothietke.net/wp-content/uploads/2021/04/Khothietke.net-PNG-02439.png",
        name: "Táo đỏ",
        number: "2",
        price: "9.98",
        weight: "kg",
        type: "Fruit",
    },
    {
        _id: "2",
        image: "https://khothietke.net/wp-content/uploads/2021/04/PNGKhovector.net-02105.png",
        name: "Cam",
        number: "1",
        price: "4.99",
        weight: "kg",
        type: "Fruit",
    },
    {
        _id: "3",
        image: "https://fujimart.vn/image/cache/catalog/B%C3%A1nh%20t%C6%B0%C6%A1i%20Fuji/1497432515-149735601523653-an-xoai-502x502.png",
        name: "Xoài",
        number: "1",
        price: "5.99",
        weight: "kg",
        type: "Fruit",
    },
    {
        _id: "4",
        image: "https://api.nongthonviet.com.vn/media/60a63c8d5f2fd34dccbb64cd_images1373000_Longan2.png",
        name: "Nhãn",
        number: "4",
        price: "23.96",
        weight: "kg",
        type: "Fruit",
    },
]