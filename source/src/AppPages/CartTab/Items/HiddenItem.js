import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../../../../source/Constant/Colors'

const HiddenItem = (props) => {
  const { onPress,data } = props
  return (
    <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      <Pressable onPress={()=>{console.log(data._id)}} style={styles.itemContainer} android_ripple={{ color: Colors.white }}>
        <Image source={require('../../../../../assets/images/ic_trashcan.png')}></Image>
      </Pressable>
    </View>

  )
}

export default HiddenItem

const styles = StyleSheet.create({

  itemContainer: {
    width: 71,
    height: 108,
    backgroundColor: '#a42b32',
    justifyContent: 'center',
    alignItems: 'center'
  }

})