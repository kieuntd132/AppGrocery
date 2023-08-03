import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarNavigator from './ToptabNav'
import Toolbar from '../../components/Toolbar'
import { useNavigation } from '@react-navigation/native'
const Orders = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ padding:20 }}>
        <Toolbar
          type={"goBack"}
          title={"Orders"}
          onPressLeft={()=> {navigation.goBack()}}
          onPressRight={() => { console.log("hihi"); }} />
      </View>

      <TopBarNavigator />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})