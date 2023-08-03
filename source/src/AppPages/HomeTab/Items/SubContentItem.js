import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Fonts } from '../../../../Constant/Font'
import { Colors } from '../../../../Constant/Colors'
import DropShadow from 'react-native-drop-shadow'

const SubContentItem = (props) => {
    const { data } = props
    return (
        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                paddingVertical: 5
            }}
        >


            <View style={styles.itemContainer}>
                <View style={{ alignItems: 'center', paddingTop: 13.64 }}>
                    <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={{ uri: data.image }}></Image>
                </View>
                <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{data.name}</Text>
                    <Text style={styles.productWeight}>1{data.weight}</Text>
                </View>
                <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>${data.price}</Text>
                    <Pressable android_ripple={{ color: 'white' }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../../../../../assets/images/ic_addToCart.png')}></Image>
                    </Pressable>
                </View>
            </View>
        </DropShadow>
    )
}

export default SubContentItem

const styles = StyleSheet.create({
    itemContainer: {
        width: 150,
        backgroundColor: '#FFFFFF',
        height: 189,
        borderRadius: 20,
        marginStart: 16
    },
    productNameContainer: {
        paddingHorizontal: 15,
        marginTop: 22.27
    },
    productName: {
        fontFamily: Fonts.font_700,
        fontSize: 17,
        lineHeight: 18,
        color: Colors.brown_bodyText
    },
    productWeight: {
        marginStart: 5,
    },
    productPriceContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 11,
        paddingEnd: 16.87
    },
    productPrice: {
        fontFamily: Fonts.font_700,
        fontSize: 18,
        color: Colors.orange_primary,
        lineHeight: 21.6
    }
})