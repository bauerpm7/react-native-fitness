import React, { Component } from 'react'
import { View, Slider, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'


export default function FitnessSlider ({ max, unit, step, value, onChange}) {
  return (
    <View style = {[styles.row ,{justifyContent: 'space-between'}]}>
     <Slider
        minimumValue = {0} 
        maximumValue = {max}
        step = {step}
        value= {value}
        onValueChange = {onChange}
        style = {styles.slider}
      />
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
  slider: {
    flex: 1,
    paddingRight: 5, 
    paddingLeft: 5
  },
   metricCounter: {
    justifyContent: 'center',
    alignItems: 'center', 
    width: 85
  }
})