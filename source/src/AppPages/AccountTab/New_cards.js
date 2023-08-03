import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Toolbar from '../../components/Toolbar'
import { Colors } from '../../../Constant/Colors'
import { Fonts } from '../../../Constant/Font'
import ButtonApp from '../../components/ButtonApp'
import TextInputApp from '../../components/TextInputApp'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const New_cards = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Toolbar
                        type={"goBack"}
                        title={"New Card"}
                        onPressLeft={() => { navigation.goBack() }}
                    />
                    <View style={styles.item}>
                        <Text style={styles.txtitem}>Card number</Text>
                        <TextInputApp type={"Noicon"} placeholder={"xxxx xxxx xxxx xxxx"} />
                    </View>
                    <View style={[styles.item, { marginTop: 37 }]}>
                        <Text style={styles.txtitem}>Expiry Date</Text>
                        <TextInputApp type={"Noicon"} placeholder={"MM/YY"} />
                    </View>
                    <View style={[styles.item, { marginTop: 37 }]}>
                        <Text style={styles.txtitem}>CCV</Text>
                        <TextInputApp type={"Noicon"} placeholder={"****"} />
                    </View>
                </View>
                <View style={styles.button}>
                    <ButtonApp type={"Fill"} text={"Add Card"} onPress={() => { console.log('Add card'); }} />
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default New_cards

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 20,
        paddingTop: 0
    },
    toolbar: {
        flex: 0.75
    },
    button: {
        flex: 0.1
    },
    item: {
        marginTop: 46,
    },
    txtitem: {
        color: Colors.brown_bodyText,
        fontFamily: Fonts.font_700,
        fontSize: 18,
        marginBottom: 1
    },
})