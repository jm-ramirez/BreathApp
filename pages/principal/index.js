import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './styles';
import { Circle } from "../../components/circle";

export const Principal = () => {
    return (
        <LinearGradient
            end={{x: 0.0, y: 0.0}} start={{x: 1.0, y: 1.0}}
            locations={[0,1.0]}
            colors={['#7B66FF', '#BCBCC7']}
            style={style.linearGradient}
        >
            <Text style={style.title}>
                Breathe & relax
            </Text>
            <Circle/>
        </LinearGradient>
    );
};