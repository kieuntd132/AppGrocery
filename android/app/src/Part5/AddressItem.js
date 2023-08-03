import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../../../source/Constant/Colors';
import { Fonts } from '../../../../source/Constant/Font';

const AddressItem = (props) => {
  const { data, navigation } = props;
  const goEdit = () =>{
    navigation.navigate("Edit",{data: data});
  }
  return (
    <TouchableOpacity style={styles.container} onPress={goEdit} navigation={navigation}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        {data.Address_Title == 'Home' ? 
        (
          <Image
          style={{width: 25, height: 25}}
          source={require('../../../../assets/images/ic_home.png')}></Image>
        )
        :
        (
          <Image
          style={{width: 25, height: 25}}
          source={require('../../../../assets/images/ic_office.png')}></Image>
        )
        }
        <View>
          <Text style={styles.text}>{data.Address_Title}</Text>
          <Text style={[styles.text, {fontFamily: Fonts.font_400, color: '#6D3805CC' ,fontWeight:'400', fontSize:16, lineHeight:19, marginTop: 8}]}>{data.Address}</Text>
        </View>
      </View>
      <View>
        <Image
        style={styles.arrow}
        source={require('../../../../assets/images/ic_arrow.png')}></Image>
      </View>
    </TouchableOpacity>
  )
}

export default AddressItem

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderBottomColor: '#6D38050F',
    borderBottomWidth: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow:{
    width:7.5,
    height: 14
  },
  text: {
    fontFamily: Fonts.font_700,
    fontStyle: 'normal', fontWeight: '700', fontSize: 18,
    lineHeight: 22, color: Colors.brown_bodyText,
    marginLeft: 8
},
})