import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Constant/Colors'
import { Fonts } from '../../Constant/Font'

const ButtonType = ["Fill", "Outline"]

const ButtonApp = (props) => {
    const { type, text, onPress } = props;
    const [ButtonState, setButtonState] = useState("");
    switch (type) {
        case ButtonType[0]:
            if (ButtonState == ButtonType[0]) {
                break;
            }
            setButtonState(ButtonType[0]);
            break;
        case ButtonType[1]:
            if (ButtonState == ButtonType[1]) {
                break;
            }
            setButtonState(ButtonType[1]);
            break;
        default:
            break;
    }
    return (
        <View>
            {
                ButtonType[0] == ButtonState &&
                <Pressable
                    onPress={onPress} style={styles.buttonFill}
                    android_ripple={{ color: Colors.white }}>
                    <Text style={styles.textFill}>{text}</Text>
                </Pressable>
            }
            {
                ButtonType[1] == ButtonState &&
                <Pressable
                    onPress={onPress} style={styles.buttonOutline}
                    android_ripple={{ color: Colors.white }}>
                    <Text style={styles.textOutline}>{text}</Text>
                </Pressable>
            }

        </View>
    )
}

export default ButtonApp

const styles = StyleSheet.create({
    buttonFill: {
        backgroundColor: Colors.orange_primary,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFill: {
        fontFamily: Fonts.font_700,
        fontSize: 20,
        color: Colors.white
    },
    buttonOutline: {
        borderColor: Colors.orange_primary,
        borderWidth: 1,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOutline: {
        fontFamily: Fonts.font_700,
        fontSize: 20,
        color: Colors.orange_primary
    }
})