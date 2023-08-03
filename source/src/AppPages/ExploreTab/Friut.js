import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../../components/Toolbar';
import { Colors } from '../../../Constant/Colors';
import SearchBar from '../../components/SearchBar';
import ItemProduct from './Items/ItemProduct';
import { Fonts } from '../../../Constant/Font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StaggeredList from '@mindinventory/react-native-stagger-view';
import { useNavigation } from '@react-navigation/native';

const Friut = () => {
    const [activeChoose, setactiveChoose] = useState(null);
    const Tab = createMaterialTopTabNavigator();

    const onHandle = (item) => {
        setactiveChoose(item);
        // console.log(activeChoose);
    };

    const renderItem = (props) => {

        const { item } = props;
        return (
            <TouchableOpacity style={styles.buttonType} onPress={() => onHandle(item.id)}>
                <Text style={styles.textType}>{item.name}</Text>
                <View style={styles.boxChoose}></View>
            </TouchableOpacity>
        )
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.boxToolbar}>
                <Toolbar
                    type={"goBack"}
                    title={"Fruit"}
                    onPressLeft={() => { navigation.goBack() }}
                    onPressRight={() => { console.log("hihi"); }} />
                <SearchBar />
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        borderTopColor: 'orange',
                        borderTopWidth: 2,
                        borderTopEndRadius: 6,
                        borderTopStartRadius: 6,
                        marginStart: 1.5,
                        marginEnd: 1.5
                    },
                    tabBarScrollEnabled: true,
                    tabBarItemStyle: {
                        width: "auto",
                        marginStart: 5,
                        marginEnd: 5,
                    },
                    tabBarLabelStyle: {
                        textTransform: 'capitalize'
                    },
                    tabBarStyle: {
                        justifyContent: 'center',
                    }
                }}>
                {
                    dataTypes.map(item => <Tab.Screen name={item.name} key={item.id} children={() => {
                        return (
                            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                                <StaggeredList
                                    data={dataPopular}
                                    animationType={'FADE_IN_FAST'}
                                    contentContainerStyle={styles.contentContainer}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={(item) => <ItemProduct
                                        key={item.id}
                                        dataProduct={item}
                                    />}
                                />
                            </View>
                        )
                    }} />)
                }

            </Tab.Navigator>



            {/* <ScrollView >
                <>
                    {
                        dataPopular.map((item) => <ItemProduct
                            key={item.id}
                            dataProduct={item} />)
                    }</>
            </ScrollView> */}
        </View>
    )
}

export default Friut

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 16,
    },
    buttonType: {
        margin: 8,
        alignItems: 'center',
    },
    textType: {
        fontFamily: Fonts.font_400,
        fontSize: 20,
        color: Colors.topTab,
    },
    boxChoose: {
        width: "100%",
        borderWidth: 1,
        marginTop: 3,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
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

const dataPopular = [
    {
        id: 1,
        name: 'Beef',
        price: 4.99,
        type: 'Meat',
        image: "https://product.hstatic.net/1000301274/product/1ba-chi_fae731a50214428eb0ee2b073aa86007_grande_5b041e6c2a124672a25f9c9a8f2230ae.png",
    },
    {
        id: 28,
        type: 'Panel',
        image: "https://vcamart.vn/wp-content/uploads/2021/12/ca-chep-600x315-1.png",
    },
    {
        id: 2,
        name: 'Pork',
        price: 4.99,
        type: 'Meat',
        image: "https://thucphamthanhnga.vn/wp-content/uploads/2022/02/Nongheo3.png",
    },
    {
        id: 3,
        name: 'Chicken',
        price: 4.99,
        type: 'Meat',
        image: "https://product.hstatic.net/1000301274/product/dui-hn_19157ee4078b42daa5ec8b7fd270df6e.png",
    },
    {
        id: 4,
        name: 'Fish',
        price: 4.99,
        type: 'Meat',
        image: "https://product.hstatic.net/1000301274/product/artboard_1_copy_4_8f4e9183ba074352a5fbb09d89e44e2d_grande.png",
    },
    {
        id: 5,
        name: 'Fish',
        price: 4.99,
        type: 'Meat',
        image: "https://product.hstatic.net/1000301274/product/artboard_1_copy_4_8f4e9183ba074352a5fbb09d89e44e2d_grande.png",
    },
    // {
    //     id: 6,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 7,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 8,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 9,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 10,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 11,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 12,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 13,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 14,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 15,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 16,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 17,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 18,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 19,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 20,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 21,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 22,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 23,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // }, {
    //     id: 24,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 25,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 26,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },
    // {
    //     id: 27,
    //     name: 'Fish',
    //     price: 4.99,
    //     type: 'Meat',
    //     image: require('../../assets/images/img-Banana.png'),
    // },

]