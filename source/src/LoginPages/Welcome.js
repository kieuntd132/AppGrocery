import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Fonts } from '../../Constant/Font';
import { Colors } from '../../Constant/Colors';
import ButtonApp from '../components/ButtonApp';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.boxImage} source={require('../../../assets/images/ic_Illustration.png')} />
            <Text style={styles.text}>Realax and shop</Text>
            <Text style={styles.text2}>Shop online and get grocories {'\n'}
                delivered from stores to your home {'\n'}
                in as fast as 1 hour .</Text>
            <View style={styles.boxPressable}>
                <ButtonApp type={'Fill'} text={'Sign up'} onPress={() => navigation.navigate('Signup')}/>
            </View>
            <View style={styles.boxPressable2}>
                <ButtonApp type={'Outline'} text={'Sign in'}/>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 20
    },
    boxImage: {
        with: 329.36,
        height: 362,
        resizeMode: 'contain',
        marginLeft: 23,
    },
    text: {
        width: 152,
        height: 24,
        fontSize: 20,
        color: '#7F4E1D',
        lineHeight: 24,
        marginTop: 33,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold'
    },
    text2: {
        width: 257,
        height: 57,
        fontSize: 16,
        fontFamily: Fonts.font_400,
        lineHeight: 19.2,
        color: Colors.brown_bodyText,
        alignItems: 'center',
        marginTop: 16,
        fontWeight: '400',
        textAlign: 'center',
    },
    boxPressable: {
        marginTop: 51,
        marginBottom: 20,
        alignSelf: 'flex-start',
        width: '100%'
    },
    boxPressable2: {
        marginTop: 16,
        marginBottom: 20,
        alignSelf: 'flex-start',
        width: '100%'
    },
    
})