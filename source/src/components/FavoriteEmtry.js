import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ToolbarApp from '../components/ToolbarApp';
import { Colors } from '../constants/Colors';
import { windowHeight } from '../../App';
import ButtonApp from '../components/ButtonApp';
import { Fonts } from '../constants/Fonts';

const FavoriteEmtry = () => {
    return (
        <View style={styles.container}>
            <ToolbarApp
                title={'Favorite'}
            />

            <Image
                source={require("../../assets/images/x.jpg")}
                style={{ height: windowHeight / 2, resizeMode: 'contain', alignSelf: 'center' }}
            />

            <Text style={styles.title}>Your heart is empty</Text>
            <Text style={[styles.p]}>Start fall in love with some good goods </Text>
            <ButtonApp
                type={'fill'}
                title={'Start shoping'}
            />
        </View>
    )
}

export default FavoriteEmtry

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Colors.while,
        justifyContent: 'space-betweens',
    },

    title: {
        marginTop: 30,
        color: Colors.brown_bodyText,
        fontFamily: Fonts.font_700,
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.16,
        textAlign: 'center'
    },

    p: {
        marginTop: 16,
        marginBottom: 50,
        textAlign: 'center',
        alignSelf: 'center',
        width: '75%',
        fontFamily: Fonts.font_400,
        fontSize: 16,
        lineHeight: 19,
        color: Colors.lightBrow_bodyText
    }
})