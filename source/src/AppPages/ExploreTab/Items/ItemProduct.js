import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../../Constant/Colors';
import DropShadow from 'react-native-drop-shadow';
import { Fonts } from '../../../../Constant/Font';

const ItemProduct = (props) => {
    const { dataProduct } = props;
    const { type } = props;
    // console.log(dataProduct);

    return (
        <>
            {
                dataProduct.item.type != "Panel" ?
                    <DropShadow style={styles.boxShadow} >
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.boxImage}>
                                <Image source={{ uri: dataProduct.item.image }} style={styles.imageProduct} />
                            </View>
                            <View style={styles.boxProduct} >
                                <Text style={styles.textName}>{dataProduct.item.name}</Text>
                                {
                                    type == 1 ?
                                        <Text style={styles.textKl_1}>1kg</Text>
                                        :
                                        <Text style={styles.textKl_2}>{dataProduct.item.price}g</Text>
                                }
                                <View style={styles.boxAdd}>
                                    <Text style={styles.textPrice}>${dataProduct.item.price + ""}</Text>
                                    <TouchableOpacity>
                                        <Image style={styles.imageAdd} source={require('../../../../../assets/images/ic-AddProduct.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </DropShadow>
                    :
                    <DropShadow style={[styles.boxShadow, { shadowOpacity: 0, alignItems: 'center', justifyContent: 'center'}] } >
                            <View style={styles.boxImage}>
                                <Image source={{ uri: dataProduct.item.image }} style={styles.imageProduct} />
                            </View>
                    </DropShadow>
            }
        </>
    )
}

export default ItemProduct

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: Colors.silver,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        flex: 1,
        alignItems: "center",
        padding: 8,
    },
    container: {
        width: 164,
        height: Number(Math.random(10) + 180),
        borderRadius: 20,
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    boxImage: {
        width: "100%",
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageProduct: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
    boxProduct: {
        marginHorizontal: 15
    },
    textName: {
        fontFamily: Fonts.font_700,
        fontSize: 15,
        color: Colors.brown_bodyText,
    },
    textKl_1: {
        fontFamily: Fonts.font_400,
        fontSize: 12,
        color: Colors.brown_bodyText,
    },
    textKl_2: {
        fontFamily: Fonts.font_400,
        fontSize: 12,
        color: Colors.gray_92,
    },
    boxAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    textPrice: {
        fontFamily: Fonts.font_700,
        fontSize: 20,
        color: Colors.orange_primary,
    },
    imgPanel: {
        width: 164,
        height: 194,
        resizeMode: 'contain'
    },
    imageAdd: {

    }

})