import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../../components/Toolbar'
import TextInputApp from '../../components/TextInputApp'
import { CountryPicker } from "react-native-country-codes-picker";
import ButtonApp from '../../components/ButtonApp';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
import { Fonts } from '../../../Constant/Font';
import { Colors } from '../../../Constant/Colors';
const FavoriteEmpty = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View>
                <Toolbar type="goBack" title="Edit Profile"></Toolbar>
                <FastImage
                    style={{ width: windowWidth - 40, height: 360, marginTop: 21.87 }}
                    source={require('../../../../assets/images/img_favorite.png')}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View style={{alignItems:'center',marginTop:15}}>
                    <Text style={styles.textBold}>Your heart is empty</Text>
                    <Text style={styles.textLight}>Start fall in love with some good goods</Text>
                </View>

            </View>
            <ButtonApp type="Fill" text="Start Shoping"></ButtonApp>
        </View>
    )
}

export default FavoriteEmpty

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-between'
    },
    textBold:{
        fontFamily: Fonts.font_700,
        fontSize:20,
        lineHeight:24,
        letterSpacing:-0.17,
        color:Colors.brown_bodyText,

    },
    textLight:{
        fontFamily: Fonts.font_400,
        fontSize:16,
        lineHeight:21,
        marginTop:8,
        color:Colors.brown_bodyText,
    }
})