import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Fonts } from '../../../../source/Constant/Font'
import { Colors } from '../../../../source/Constant/Colors'
import ButtonApp from '../../components/ButtonApp'

const OrderSuccessful = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
         <Image source={require('../../../../assets/images/img_orderSuccess.png')}></Image>
     </View>
     <View style={styles.middleText}>
      <Text style={styles.upperText}>Your Order Has Been Accepted</Text>
      <Text style={styles.lowerText}>We've accepted your order, and we've getting it ready</Text>
     </View>
     <View style={styles.buttonContainer}>
     <ButtonApp type="Fill" text="Track Order"></ButtonApp>
     <View style={{marginTop:16}}>
     <ButtonApp type="Outline" text="Back Home"></ButtonApp>
     </View>
     
     </View>
    </View>
  )
}

export default OrderSuccessful

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between'
  },
  banner:{
    paddingTop:93,
    paddingStart:26,
    paddingEnd:42.4
  },
  middleText:{
    alignItems:'center',
    paddingHorizontal:37
  },
  upperText:{
    fontFamily:Fonts.font_700,
    fontSize:24,
    lineHeight:24,
    textAlign:'center',
    color:Colors.brown_bodyText
  },
  lowerText:{
    fontFamily: Fonts.font_400,
    fontSize:18,
    lineHeight:21,
    textAlign:'center',
    marginTop:11,
    color:Colors.brown_bodyText
  },
  buttonContainer:{
    padding:16
  }
})