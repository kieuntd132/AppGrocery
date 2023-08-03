import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../../Constant/Colors';
import { Fonts } from '../../../../Constant/Font';

const ItemType = (props) => {
    const { dataTypes } = props;
    return (
        <View style = {styles.container}>
            <TouchableOpacity key={dataTypes.id} style={styles.container_1}>
                <Image source={dataTypes.image} style={styles.imageType} />
                <Text style={styles.textType}>{dataTypes.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemType

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 27,
    },
    container_1: {
        height: 135,
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageType: {
        width: 100,
        height: 100,
    },
    textType: {
        fontFamily: Fonts.font_400,
        fontSize: 15,
        color: Colors.brown_bodyText,
    },
})