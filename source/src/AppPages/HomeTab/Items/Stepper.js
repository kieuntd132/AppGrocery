import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../../../Constant/Colors'
import { Fonts } from '../../../../Constant/Font'
let temp
const StepperType = ["normal", "large"];
const Stepper = (props) => {
    const { value, onChangeValue = (value) => { }, type } = props
    const [handleNumber, sethandleNumber] = useState(value)
    const [stepperState, setstepperState] = useState('')
    switch (type) {
        case StepperType[0]: {
            if (stepperState == StepperType[0]) {
                break;
            }
            setstepperState(StepperType[0]);
            break
        }
        case StepperType[1]: {
            if (stepperState == StepperType[1]) {
                break;
            }
            setstepperState(StepperType[1]);
            break;
        }
    }
    useEffect(() => {
        onChangeValue(handleNumber)

    }, [handleNumber])

    useEffect(() => {
        temp = handleNumber

    }, [])

    const handleMinus = () => {
        temp -= 1;
        if (temp <= 1) {
            temp = 1
        }
        sethandleNumber(temp)
    }
    const handlePlus = () => {
        temp += 1;
        sethandleNumber(temp)
    }
    return (
        <View>
            {
                stepperState === StepperType[0] &&
                <View style={styles.container}>
                    <Pressable style={styles.button} onPress={handleMinus}>
                        <Image style={styles.foreground} source={require('../../../../../assets/images/ic_minus.png')}></Image>
                    </Pressable>

                    <Text style={styles.text}>{handleNumber}</Text>
                    <Pressable style={styles.button} onPress={handlePlus}>
                        <Image style={[styles.foreground, { height: 15.19 }]} source={require('../../../../../assets/images/ic_plus.png')}></Image>
                    </Pressable>
                </View>
            }
            {stepperState === StepperType[1] &&
                <View style={styles.container_large}>
                    <Pressable style={styles.button_large} onPress={handleMinus}>
                        <Image style={styles.foreground_large} source={require('../../../../../assets/images/ic_minus.png')}></Image>
                    </Pressable>

                    <Text style={styles.text}>{handleNumber}</Text>
                    <Pressable style={styles.button_large} onPress={handlePlus}>
                        <Image style={[styles.foreground_large, { height: 15.19 }]} source={require('../../../../../assets/images/ic_plus.png')}></Image>
                    </Pressable>
                </View>
            }
        </View>
    )
}

export default Stepper

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        height: 30,
        width: 98,
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: Fonts.font_600,
        fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    },
    button: {
        width: 24.71,
        height: 24.71,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        lineHeight: 21.6,
        fontFamily: Fonts.font_400,
        color: Colors.brown_bodyText
    },
    foreground: {
        width: 14.12,
        height: 2,
        tintColor: Colors.brown_bodyText
    },
    // large
    container_large: {
        backgroundColor: '#F4F4F4',
        height: 50,
        width: 286,
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: Fonts.font_600,
        fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    },
    button_large: {
        width: 41,
        height: 41,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_large: {
        fontSize: 24,
        lineHeight: 28.8,
        fontFamily: Fonts.font_400,
        color: Colors.brown_bodyText
    },
    foreground_large: {
        width: 19,
        height: 3,
        tintColor: Colors.brown_bodyText
    }
})