import React from 'react'
import style from './styles';
import { Alert, Image, Text, View } from 'react-native';
import LogoDisabled from '../../assets/img/logo_disabled.png';

export const Circle = () => {
  return (
    <View style={{alignItems:'center'}}>
        <View style={ style.circle }>
          {/* <Image source={ LogoDisabled } style={style.imageView} fill="#fff" />  */}
        </View>
        <View  style={ style.circle2 }>
        </View>
        <View  style={ style.circle3 }>
        </View>        
    </View>
  )
}
