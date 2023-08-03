import { StyleSheet, Text, View, Image, Dimensions, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { Fonts } from '../../../../source/Constant/Font'
import { Colors } from '../../../Constant/Colors'
const Ongoing = () => {
  const [isOnGoing, setisOnGoing] = useState(true)
  return (
<View  style={styles.container}>
{ isOnGoing === true &&
  <ScrollView  showsVerticalScrollIndicator={false}>
  <View style={styles.event}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.iconCal} source={require('../../../../assets/images/ic-calendar.png')} />
          <Text style={styles.date}>March 5, 2019</Text>
      </View>
      <Text style={styles.time}>6:30 pm</Text>
  </View>
  <View style={{marginTop: 50, justifyContent: 'center'}}>
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <Image style={styles.tick} source={require('../../../../assets/images/ic-tick.png')} />
              <View style={styles.dotOne}>
              </View>
          </View>
          <View style={styles.itemRight}>
              <Image style={styles.imgItem} source={require('../../../../assets/images/img-items.png')} />
              <Text style={styles.txtItem} >We are packin your items...</Text>
          </View>
      </View>
      <View style={styles.item}>
          <View style={styles.itemLeft}>
          <View style={styles.dotOne}/>
              <Image style={styles.tick} source={require('../../../../assets/images/ic-tick.png')} />
              <View style={styles.dotOne}/>
          </View>
          <View style={styles.itemRight}>
              <Image style={styles.imgItem} source={require('../../../../assets/images/img-grap.png')} />
              <Text style={styles.txtItem}>Your order is delivering to{'\n'}your location...</Text>
          </View>
      </View>
      <View style={styles.item}>
          <View style={[styles.itemLeft, {justifyContent: 'flex-start'}]}>
              <View style={styles.dotOne} />
              <Image style={styles.tick} source={require('../../../../assets/images/ic-tick.png')} />
          </View>
          <View style={styles.itemRight}>
              <Image style={styles.imgItem} source={require('../../../../assets/images/img-receive.png')} />
              <Text style={styles.txtItem}>Your order is received.</Text>
          </View>
      </View>
  </View>
</ScrollView>
  }

   { isOnGoing === false && <View>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/ic_ongoingNoitem.png')} />
      <Text style={styles.text}
      >There is no ongoing order right now.{'\n'} You can order from home
      </Text>
    </View>
}
   </View>
  )
}

export default Ongoing

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.white,
    padding:20
  }
  ,
  image: {
    width: 330, height: 340, marginTop: 74, alignSelf: 'center'
  },
  text: {
    marginTop: 17, textAlign: "center", fontFamily: Fonts.font_400,
    fontStyle: 'normal', fontWeight: '400', fontSize: 16,
    lineHeight: 19, color: '#804F1E'
  },
  iconCal: {
    width: 24,
    height: 24
},
event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
},
date: {
    fontSize: 18,
    lineHeight: 21.6,
    color: Colors.brown_bodyText,
    fontFamily: Fonts.font_700,
    marginStart: 7
},
time: {
    fontSize: 14,
    fontFamily: Fonts.font_400,
    color: Colors.orange_primary
},
item: {
    flexDirection: 'row',
},
itemLeft: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 18
},
itemRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
},
tick: {
    width: 16,
    height: 16,
    resizeMode: 'stretch'
},
dotOne: {
    height: 51,
    borderLeftColor: '#C6C6C6',
    borderLeftWidth: 2,
    borderStyle: 'dashed',
},
imgItem: {
    width: 72,
    height: 72,
    resizeMode: 'contain'
},
txtItem: {
    fontFamily: Fonts.font_400,
    color: Colors.brown_bodyText,
    fontSize: 16,
    lineHeight: 22,
    marginStart: 12,
    flexWrap: 'wrap',
}
})