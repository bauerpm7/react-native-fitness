import React, { Component } from 'react'
import { View,  Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import { white, gray, purple } from '../utils/colors'
export default function Stepper ({ max, unit, step, value, onIncrement, onDecrement}) {
  return (
    <View style = {[styles.row, {justifyContent:'space-between'}]} >
      { Platform.OS === 'ios'
      ? <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity
          style = {[styles.iosBtn,
            {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
          onPress = {onDecrement}
        >
          <Entypo 
            name = 'minus'
            size = {30}
            color= { purple }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style = {[styles.iosBtn, 
            {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
          onPress = {onIncrement}
        >
          <Entypo 
            name = 'plus'
            size = {30}
            color= { purple }
          />
        </TouchableOpacity>
        </View>
        : 
        <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity
          style = { styles.androidBtn}
          onPress = {onDecrement}
        >
          <FontAwesome 
            name = 'minus'
            size = {30}
            color= { white }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.androidBtn}
          onPress = {onIncrement}
        >
          <FontAwesome 
            name = 'plus'
            size = {30}
            color= { white }
          />
        </TouchableOpacity>
        </View> }
      <View style = {styles.metricCounter}>  
        <Text style = {{fontSize: 24, textAlign: 'center'}}> {value} </Text>
        <Text style = {{fontSize: 18, color: gray, textAlign: 'center'}}> {unit} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25

  },
  androidBtn: {
    backgroundColor: purple,
    padding:10,
    marginRight: 5,
    marginLeft: 5, 
    borderRadius: 2,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  metricCounter: {
    justifyContent: 'center',
    alignItems: 'center', 
    width: 85
  }
})