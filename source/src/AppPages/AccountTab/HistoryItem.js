import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../../source/Constant/Colors';
import { Fonts } from '../../../../source/Constant/Font';
const HistoryItem = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image style={styles.orderIcon}
                    source={require('../../../../assets/images/ic_orderHistory.png')} />
                <View style={{
                    marginLeft: 16,
                }}>
                    <Text style={[styles.text, { fontSize: 18, lineHeight: 22, letterSpacing: 0.6, color: Colors.brown_bodyText }]}>Order #{data.id}</Text>
                    {data.dilivered == true
                        ?
                        (<Text
                            style={[styles.text,
                            { fontSize: 14, lineHeight: 17, color: "#5EC401", textTransform: 'capitalize', marginTop: 4, fontWeight: '400' }]}
                        >Delivered</Text>)
                        :
                        (<Text
                            style={[styles.text,
                            { fontSize: 14, lineHeight: 17, color: "#F2110D", textTransform: 'capitalize', marginTop: 4, fontWeight: '400' }]}
                        >Cancelled</Text>)
                    }
                    <Text
                        style={[styles.text,
                        { fontSize: 14, lineHeight: 17, color: Colors.brown_bodyText, textTransform: 'capitalize', marginTop: 3, fontWeight: '400' }]}
                    >{data.date}</Text>
                </View>
            </View>
            <Text style={styles.text}>${data.cost}</Text>
        </View>
    )
}

export default HistoryItem

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#6D38050F',
        borderBottomWidth: 1,
        height: 96,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    text: {
        fontFamily: Fonts.font_400,
        fontStyle: 'normal', fontWeight: '700', fontSize: 20,
        lineHeight: 24, color: Colors.orange_primary,
    },
    orderIcon: {
        height: 44, width: 44
    }
})