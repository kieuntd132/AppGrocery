import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarNavigator from './ToptabNav'
import Toolbar from '../../../../source/components/Toolbar'
const Orders = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
        <Toolbar
          type={"goBack"}
          title={"Orders"}
          onPressLeft={() => { console.log("alo"); }}
          onPressRight={() => { console.log("hihi"); }} />
      </View>

      <TopBarNavigator />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})