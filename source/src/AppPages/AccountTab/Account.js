import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import Toolbar from '../../components/Toolbar'
import { Colors } from '../../../Constant/Colors'
import { Fonts } from '../../../Constant/Font'
import { useNavigation } from '@react-navigation/native'

const Account = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
             <View style={styles.toolbar}>
                <Text style={styles.textToolBar}>Account</Text>
            </View>
            <ScrollView style={styles.detail}>
                <TouchableOpacity style={styles.item} onPress={()=> {navigation.navigate('ProfileMain')}}>
                    <Image style={styles.icon} source={require('../../../../assets/images/ic-user.png')}/>
                    <Text style={styles.txtItem}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={()=> {navigation.navigate('Orders')}}>
                    <Image style={styles.icon} source={require('../../../../assets/images/ic-shopping.png')}/>
                    <Text style={styles.txtItem}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={()=> {navigation.navigate('AddressMain')}}>
                    <Image style={styles.icon} source={require('../../../../assets/images/ic-location.png')}/>
                    <Text style={styles.txtItem}>Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={()=> {navigation.navigate('Payment')}}>
                    <Image style={styles.icon} source={require('../../../../assets/images/ic-payment.png')}/>
                    <Text style={styles.txtItem}>Payment</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14
    },
    toolbar: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    textToolBar: {
        color: Colors.orange_primary,
        fontFamily: Fonts.font_700,
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: -0.17,
        alignSelf: 'center',
        marginStart: 10,
        marginBottom: 16,
    },
    item: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    txtItem: {
        color: Colors.brown_bodyText,
        fontFamily: Fonts.font_700,
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 0.5,
        paddingStart: 12
    }
})