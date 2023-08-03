import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'


const HeartIcon = () => {
    const [handleHeart, sethandleHeart] = useState(false)
    const changeHeart = () =>{
        let temp = handleHeart;
        sethandleHeart(!temp)
    }
  return (
    <Pressable  onPress={changeHeart}>
        <Image style={{width:40,height:40}} source={handleHeart == false  ? require('../../../../../assets/images/ic_heartTrans.png') : require('../../../../../assets/images/ic_heartFill.png') }></Image>
    </Pressable>
  )
}

export default HeartIcon

const styles = StyleSheet.create({})