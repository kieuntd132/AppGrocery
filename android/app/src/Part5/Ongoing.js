import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Fonts } from '../../../../source/Constant/Font'
const Ongoing = () => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/ic_ongoingNoitem.png')} />
      <Text style={styles.text}
      >There is n ongoing order right now.{'\n'} You can order from home
      </Text>
    </View>
  )
}

export default Ongoing

const styles = StyleSheet.create({
  image: {
    width: 330, height: 340, marginTop: 74, alignSelf: 'center'
  },
  text: {
    marginTop: 17, textAlign: "center", fontFamily: Fonts.font_400,
    fontStyle: 'normal', fontWeight: '400', fontSize: 16,
    lineHeight: 19, color: '#804F1E'
  }
})