import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HistoryItem from './HistoryItem'

const History = () => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <ScrollView>
        {data.map((item) => <HistoryItem key={item.id} data={item} />)}
      </ScrollView>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})

const data = [
  {
    "id": "345",
    "dilivered": true,
    "cost": "700",
    "date": "October 26, 2014"
  },
  {
    "id": "346",
    "dilivered": false,
    "cost": "452",
    "date": "October 14, 2016"
  },
  {
    "id": "347",
    "dilivered": true,
    "cost": "281",
    "date": "July 26, 2017"
  },
]