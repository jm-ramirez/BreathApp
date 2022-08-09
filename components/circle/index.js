import React from 'react'
import style from './styles';
import { View } from 'react-native';
import CircleProgress from '../circleProgress';

export const Circle = () => {
  return (
    <View style={{alignItems:'center'}}>
        <View style={ style.circle } />          
        <View style={ style.circle2 } />
        <CircleProgress/>  
    </View>
  )
}
