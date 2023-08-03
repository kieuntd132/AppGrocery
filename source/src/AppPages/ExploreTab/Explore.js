import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import { Colors } from '../../../Constant/Colors'
import ItemType from './Items/ItemType'
import { Fonts } from '../../../Constant/Font'

const Explore = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.textToolBar}>Categories</Text>
            </View>
            <SearchBar />
            
            <FlatList
                    data={dataTypes}
                    renderItem = {({item}) => <ItemType dataTypes={item} type = {0}/>}
                    keyExtractor={item => item.id}
                    numColumns= {3}
                />
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 16,
        paddingTop: 0
    },
    // toolbar
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
        name: 'Edd & Milk',
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