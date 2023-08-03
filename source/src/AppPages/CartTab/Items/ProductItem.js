import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stepper from './Stepper'
import { Fonts } from '../../../../../source/Constant/Font'
import { Colors } from '../../../../../source/Constant/Colors'

const ProductItem = (props) => {
  const { data } = props;
  const [number, setnumber] = useState()
  console.log(number)



  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.productImageContainer}>
          <Image source={{uri: data?.image}} style={{width: 60, height: 60, resizeMode: 'contain'}}></Image>
          {
            console.log(data.image)
          }
        </View>


        <View style={styles.productInfo}>
          <Text style={styles.productName}>{data.name}</Text>
          <View style={styles.productPriceInfo}>
            <Stepper type="normal" value={Number(data.number)} onChangeValue={setnumber}></Stepper>
            <View style={styles.price}>
              <Text style={styles.priceText}>{((Number(data.price)) / Number(data.number) * number).toFixed(2)}</Text>
              <Text style={styles.priceText1}>{data.weight}</Text>
            </View>

          </View>
        </View>

      </View>

    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({

  itemContainer: {
    height: 108,
    borderBottomWidth: 1,
    borderColor: '#f2ede9',
    backgroundColor: 'white'
  },
  productImageContainer: {
    height: 108,
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 20
  },
  productInfo:
    { justifyContent: 'flex-end', marginBottom: 15, marginStart: 10 },
  productName: {
    fontFamily: Fonts.font_700,
    fontSize: 18,
    marginBottom: 15,
    color: Colors.brown_bodyText,
  },
  productPriceInfo: {
    marginStart: 15, width: '65%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceText: {
    fontFamily: Fonts.font_400,
    fontSize: 18,
    color: Colors.brown_bodyText,
    lineHeight: 21.6
  },
  priceText1: {
    fontFamily: Fonts.font_400,
    fontSize: 12,
    color: Colors.brown_bodyText,
    lineHeight: 14.4,
    alignSelf: 'flex-end',
    marginStart: 3,
  }
})