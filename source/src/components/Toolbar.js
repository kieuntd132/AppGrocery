import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Constant/Colors';
import { Fonts } from '../../Constant/Font';

const Toolbartype = ["goBack", "addRight"];

const Toolbar = (props) => {
    const [ToolbarState, setToolbarState] = useState("");
    const { type, onPressLeft, onPressRight, title } = props;
    switch (type) {
        case Toolbartype[0]:
            if (ToolbarState == Toolbartype[0]) {
                break;
            }
            setToolbarState(Toolbartype[0]);
            break;
        case Toolbartype[1]:
            if (ToolbarState == Toolbartype[1]) {
                break;
            }
            setToolbarState(Toolbartype[1]);
            break;

        default:
            break;
    }
    return (
        <View>
            {
                ToolbarState == Toolbartype[0] &&
                <View style={styles.toolbar}>
                    <TouchableOpacity
                        style={{ width: 30 }}
                        activeOpacity={0.5}
                        onPress={onPressLeft}>
                        <Image style={styles.iconBack} source={require('../../../assets/images/ic-back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </View>
            }
            {
                ToolbarState == Toolbartype[1] &&
                <View style={styles.toolbar}>
                    <View style={styles.headerIcon}>
                        <TouchableOpacity
                            style={{ width: 30 }}
                            activeOpacity={0.5}
                            onPress={onPressLeft}>
                            <Image style={styles.iconBack} source={require('../../../assets/images/ic-back.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={onPressRight}>
                            <Image style={styles.iconAdd} source={require('../../../assets/images/ic-add.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>{title}</Text>
                </View>
            }
        </View>

    )
}

export default Toolbar

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: Colors.white,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    iconBack: {
        width: 8.49,
        height: 14
    },
    iconAdd: {
        width: 16,
        height: 16
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    },
    title: {
        color: Colors.orange_primary,
        fontFamily: Fonts.font_700,
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: -0.17,
        alignSelf: 'center'
    }
})