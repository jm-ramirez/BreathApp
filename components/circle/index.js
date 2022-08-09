import React from 'react'
import style from './styles';
import { Alert, Image, Text, View } from 'react-native';
import CircleProgress from '../circleProgress';

export const Circle = () => {
  return (
    <View style={{alignItems:'center'}}>
        <View style={ style.circle }>
        </View>
        <View  style={ style.circle2 }>
        </View>
        <CircleProgress/>      
    </View>
  )
}
