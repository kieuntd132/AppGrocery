import React, { useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Colors } from '../../Constant/Colors';
import { Fonts } from '../../Constant/Font';

// const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
// });

export default function ViewPager(props) {
    const layout = useWindowDimensions();

    const {loadSecen, keySecen} = props;
    const [index, setIndex] = useState(0);
    // const [routes] = useState([
    //     { key: 'first', title: 'Ongoing' },
    //     { key: 'second', title: 'History' },
    // ]);
    const [routes] = useState(keySecen);
    // console.log(routes);

    const MyTabBar = (props) => {
        const { navigationState } = props;
        return (
            <View style={styles.itemBar}>
                {navigationState.routes.map((routes, index) => {
                    const label =
                        routes.title !== undefined
                            ? routes.title
                            : routes.key !== undefined
                                ? routes.key
                                : "Title";
                    var a = JSON.stringify(navigationState.index);
                    var b = JSON.stringify(index);
                    const isFocused = (a == b);
                    const onPress = () => {
                        if (!isFocused) {

                            setIndex(index);

                            setIndex(index); 

                        }
                    }
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            key={routes.key + routes.title}
                            onPress={onPress}
                            style={styles.tabbar}>
                            <Text style={isFocused ? styles.txt : styles.txtno}>{label}</Text>
                            <View style={isFocused ? styles.viewTab : {}}></View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={loadSecen}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={(props) =>
                <View style={styles.viewTabbar}>
                    <ScrollView key={routes.key} horizontal showsHorizontalScrollIndicator={false}>
                        <MyTabBar
                            navigationState={props.navigationState}
                            position={props.position} />
                    </ScrollView>
                </View>

            }
        />
    );
}

const styles = StyleSheet.create({
    viewTabbar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderBottomColor: 'rgba(109, 56, 5, 0.06)',
        borderBottomWidth: 1,
    },
    itemBar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabbar: {
        paddingEnd: 5,
        paddingStart: 5,
        paddingTop: 10
    },
    viewTab: {
        height: 2,
        marginTop: 5,
        borderTopColor: Colors.topTabSlt,
        borderTopWidth: 2,
        borderTopEndRadius: 6,
        borderTopStartRadius: 6

    },
    
    txt: {
        fontSize: 20,
        fontWeight: "600",
        color: Colors.topTabSlt,
        fontFamily: Fonts.font_400,
        paddingStart: 14,
        paddingEnd: 14
    },
    txtno: {
        fontSize: 20,
        color: Colors.topTab,
        fontFamily: Fonts.font_400,
        paddingStart: 14,
        paddingEnd: 14
    }

})