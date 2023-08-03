import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../Constant/Colors'
import { Fonts } from '../../Constant/Font'
const SearchBar = (props) => {
  const { onChangeText, value, onSubmitEditing } = props
  return (
    <View style={styles.viewSearch}>
      <TouchableOpacity onPress={onSubmitEditing} activeOpacity={0.5}>
        <Image style={styles.searchIcon} source={require('../../../assets/images/ic_search.png')}></Image>
      </TouchableOpacity>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.SearchBar}
        placeholder="Search"
        onSubmitEditing={onSubmitEditing}></TextInput>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  viewSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fillTextInput,
    borderRadius: 5,
  },
  SearchBar: {
    paddingEnd: 27,
    paddingTop: 14,
    paddingBottom: 14,
    paddingStart: 8,
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: Fonts.font_400,
    color: Colors.placeholder,
    borderRadius: 10,
    textTransform: 'capitalize',
    flex: 1

  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 15
  }
})