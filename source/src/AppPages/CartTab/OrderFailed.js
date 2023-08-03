import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Fonts } from '../../../../source/Constant/Font'
import { Colors } from '../../../../source/Constant/Colors'
import ButtonApp from '../../components/ButtonApp'

const OrderFailed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
         <Image style={{width:302,height:279.16}} source={require('../../../../assets/images/img_orderFailed.png')}></Image>
     </View>
     <View style={styles.middleText}>
      <Text style={styles.upperText}>Oops! Order Failed</Text>
      <Text style={styles.lowerText}>Something went terribly wrong</Text>
     </View>
     <View style={styles.buttonContainer}>
     <ButtonApp type="Fill" text="Try Again"></ButtonApp>
     <View style={{marginTop:16}}>
     <ButtonApp type="Outline" text="Back Home"></ButtonApp>
     </View>
     
     </View>
    </View>
  )
}

export default OrderFailed

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