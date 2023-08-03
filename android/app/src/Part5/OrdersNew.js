import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SceneMap } from 'react-native-tab-view';
import ViewPager from '../../../../source/components/ViewPager'
import History from './History'
import Ongoing from './Ongoing'
import Toolbar from '../../../../source/components/Toolbar'

// bước 1 import
const renderScene = SceneMap({
    first: Ongoing,
    second: History,
    // bước 2 tạo key và màn hình
  });
  const routes = [
    { key: 'first', title: 'Ongoing' },
    { key: 'second', title: 'History' },
  ];
  // bước 3 tạo các title tương ứng với key
  // bước 4 gọi Viewpager và truyền 2 tham số

const OrdersNew = () => {
  return (
    <View style={{flex:1}}>
      <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
        <Toolbar
          type={"goBack"}
          title={"Orders"}
          onPressLeft={() => { console.log("alo"); }}
          onPressRight={() => { console.log("hihi"); }} />
      </View>
      <ViewPager loadSecen={renderScene} keySecen={routes} />
    </View>
  )
}

export default OrdersNew

const styles = StyleSheet.create({})