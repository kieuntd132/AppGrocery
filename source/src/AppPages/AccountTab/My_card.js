import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Constant/Colors'
import Toolbar from '../../components/Toolbar'
import { Fonts } from '../../../Constant/Font'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native'

const My_card = () => {
    const navigation = useNavigation();
    const [listData, setListData] = useState([
        { id: 0, nameCard: 'My Card', numberCard: '5432 **** **** 6745', status: false, avatar: true },
        { id: 1, nameCard: 'My Card', numberCard: '6589 **** **** 7850', status: false, avatar: true },
        { id: 2, nameCard: 'Apple Pay', numberCard: '', status: true, avatar: false },
    ]);

    // const goNewCard = () => {
    //     navigation.navigate('NewCard');
    // };

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.id === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
        closeRow(rowMap, rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight style={styles.rowFront}>
            <TouchableOpacity
                style={styles.container2}
                onPress={() => console.log('You touched me')}>
                <View style={styles.view1}>
                    {
                        data.item.avatar ? <Image style={{ marginEnd: 20 }} source={require('../../../../assets/images/img_Mastercart.png')} /> : <Image style={{ marginEnd: 20 }} source={require('../../../../assets/images/img_card_apple.png')} />
                    }
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.textCard}>{data.item.nameCard}</Text>
                        <Text style={styles.textIDCard}>{data.item.numberCard}</Text>
                    </View>
                </View>
                {
                    data.item.status ?
                        <Image style={styles.icTick} source={require('../../../../assets/images/icon-tick.png')} />
                        :
                        <Image style={styles.icTick} source={require('../../../../assets/images/img_arrows.png')} />
                }

            </TouchableOpacity>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.id)}>
                <Image source={require('../../../../assets/images/ic_delete.png')} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <Toolbar
                    type={"addRight"}
                    title={"My cards"}
                    onPressRight={() => navigation.navigate('AddCard')}
                    onPressLeft={() => navigation.goBack()}
                />
            </View>
            {listData == '' ?
                <View style={styles.nocard}>
                    <Image source={require('../../../../assets/images/img_no_save_card.png')} />
                    <Text style={styles.txtNocard}>No Saved Card</Text>
                    <Text style={styles.txtNoidung}>You can save your card info to {'\n'} make purchase easier, faster.</Text>
                </View>
                :
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-72}
                    disableRightSwipe={true}
                />
            }
        </View>
    )
}
export default My_card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#FFF'
    },
    toolbar: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0
    },
    nocard: {
        alignItems: 'center'
    },
    txtNocard: {
        color: Colors.brown_bodyText,
        fontFamily: Fonts.font_700,
        fontSize: 20,
        marginBottom: 11
    },
    txtNoidung: {
        color: Colors.brown_bodyText,
        fontFamily: Fonts.font_400,
        fontSize: 16,
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 98,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 70,
    },

    backRightBtnRight: {
        backgroundColor: '#A42B32',
        right: 0,
    },
    trash: {
        height: 25,
        width: 25,
    },
    container2: {
        width: '100%',
        height: 98,
        padding: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#804F1E24',
        paddingTop: 20,
        paddingBottom: 20
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textCard: {
        color: '#6D3805',
        fontSize: 18,
        fontFamily: Fonts.font_700,
        marginTop: 13,
    },

    textIDCard: {
        color: '#6D3805',
        fontSize: 14,
        fontFamily: Fonts.font_400,
        marginTop: 11,
    },
    icTick: {
        width: 13,
        height: 13,
        resizeMode: 'contain'
    }
});