import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Switch
} from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Constant/Colors'
import { Fonts } from '../../../Constant/Font'
import Toolbar from '../../components/Toolbar'
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Toolbar type={'goBack'} title={'Profile'} onPressLeft={() => { navigation.goBack() }} />
            <View style={styles.content}>
                <View>
                    <Ripple
                        rippleColor={'rgba(255, 137, 137, 0.6)'}
                        rippleOpacity={0.5}
                        rippleContainerBorderRadius={10}
                        onPress={() => navigation.navigate('Edit')}>
                        <View style={styles.itemSlec}>
                            <View style={styles.rowView}>
                                <Image style={styles.iconItem} source={require('../../../../assets/images/ic-user-profile.png')} />
                                <Text style={styles.title}>Edit Profile</Text>
                            </View>
                            <Image style={styles.iconItem} source={require('../../../../assets/images/ic-right-arrow.png')} />
                        </View>
                    </Ripple>
                    <Ripple
                        rippleColor={'rgba(255, 137, 137, 0.6)'}
                        rippleOpacity={0.5}
                        rippleContainerBorderRadius={10}
                        onPress={() => navigation.navigate('ChangePass')}>
                        <View style={styles.itemSlec}>
                            <View style={styles.rowView}>
                                <Image style={styles.iconItem} source={require('../../../../assets/images/ic-key.png')} />
                                <Text style={styles.title}>Change Password</Text>
                            </View>
                            <Image style={styles.iconItem} source={require('../../../../assets/images/ic-right-arrow.png')} />
                        </View>
                    </Ripple>
                    <Ripple
                        rippleColor={'rgba(255, 137, 137, 0.6)'}
                        rippleOpacity={0.5}
                        rippleContainerBorderRadius={10}
                        onPress={() => navigation.navigate('MyCard')}>
                        <View style={styles.itemSlec}>
                            <View style={styles.rowView}>
                                <Image style={styles.iconItem} source={require('../../../../assets/images/ic-card.png')} />
                                <Text style={styles.title}>My Cards</Text>
                            </View>
                            <Image style={styles.iconItem} source={require('../../../../assets/images/ic-right-arrow.png')} />
                        </View>
                    </Ripple>
                </View>
                <View>
                    <Text style={styles.appSettings}>App Settings</Text>
                </View>
                <View>
                    <View style={styles.itemSlec}>
                        <View style={styles.rowView}>
                            <Image style={styles.iconItem} source={require('../../../../assets/images/ic-notification.png')} />
                            <Text style={styles.title}>Notifications</Text>
                        </View>
                        <Switch
                            trackColor={{ false: '#6670804D', true: Colors.orange_primary }}
                            // thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                            thumbColor={Colors.white}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <Ripple
                        rippleColor={'rgba(255, 137, 137, 0.6)'}
                        rippleOpacity={0.5}
                        rippleContainerBorderRadius={10}>
                        <View style={styles.itemSlec}>
                            <View style={styles.rowView}>
                                <Image style={styles.iconItem} source={require('../../../../assets/images/ic-langue.png')} />
                                <Text style={styles.title}>Language</Text>
                            </View>
                            <View style={styles.rowView}>
                                <Text style={styles.txtLanguage}>English</Text>
                                <Image style={styles.iconItem} source={require('../../../../assets/images/ic-right-arrow.png')} />
                            </View>
                        </View>
                    </Ripple>
                    <Ripple
                        rippleColor={'rgba(255, 137, 137, 0.6)'}
                        rippleOpacity={0.5}
                        rippleContainerBorderRadius={10}
                        onPress={() => navigation.navigate('Logout')}>
                        <View style={styles.itemSlec}>
                            <View style={styles.rowView}>
                                <Image style={styles.iconItem} source={require('../../../../assets/images/ic-logout.png')} />
                                <Text style={styles.title}>Logout</Text>
                            </View>
                        </View>
                    </Ripple>
                </View>

            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 20,
        paddingTop: 0
    },
    itemSlec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    iconItem: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: Fonts.font_700,
        color: Colors.brown_bodyText,
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.3,
        marginStart: 15
    },
    appSettings: {
        color: Colors.orange_primary,
        fontFamily: Fonts.font_700,
        fontSize: 22,
        lineHeight: 26,
        letterSpacing: -0.3,
        marginTop: 10,
        marginBottom: 10
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtLanguage: {
        fontFamily: Fonts.font_400,
        color: Colors.topTab,
        marginEnd: 10,
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.3
    }
})