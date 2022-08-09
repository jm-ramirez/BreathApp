import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import LogoDisabled from '../../assets/img/logo_disabled.png';
import LogoEnabled from '../../assets/img/logo_enabled.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Play from '../../assets/img/Play.png';
import Pause from '../../assets/img/Pause.png';
import { runOnJS } from 'react-native-reanimated';

const Button = ({ onPress, label, active }) => (
  <TouchableOpacity style={{...styles.button, backgroundColor: active ? 'rgba(255, 255, 255, 0.2)': 'rgba(15, 16, 32, 0.3)'}} onPress={onPress}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

const CircleProgress = () => {
    const [running, setRunning] = useState(false);
    const [sectionActive, setSectionActive] = useState(0);
    const [subTitulo, setSubTitulo] = useState('Inhale');

    useEffect(() => {
        progressRef.current.pause();
    }, []);
    
    const progressRef = useRef(null);
  
    const setSubT = (index) => {
        setSubTitulo(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.subTitle}>
                {running ? subTitulo : ''} 
            </Text>
            <CircularProgress
            value={100}          
            radius={110}
            activeStrokeColor={'background: rgba(15, 16, 32, 0.4)'}
            inActiveStrokeColor={'#ffffff'}
            inActiveStrokeOpacity={0.4}
            inActiveStrokeWidth={4}
            activeStrokeWidth={4}
            showProgressValue={false}
            progressFormatter={(value) => {
                'worklet';
                
                if(parseInt(value) === 0 && subTitulo === 'Exhale')
                    runOnJS(setSubT)('Inhale')
                else if(parseInt(value) === 50 && subTitulo === 'Inhale' && running)
                    runOnJS(setSubT)('Exhale')
            }}
            onAnimationComplete={() => {
                setSubTitulo('Inhale');
                progressRef.current.reAnimate();
                progressRef.current.pause();
                setRunning(false)
            }}
            delay={1000}
            duration={sectionActive === 0 ? 60000 : sectionActive === 1 ? 120000 : 180000}
            ref={progressRef}
            />
            <View
            style={styles.tag}/>

            <View style={styles.buttonContainer}>
            <Pressable
                onPress={() => {
                !running ? (progressRef.current.play(), setRunning(true)) : (progressRef.current.pause(), setRunning(false))
                }}
                label={'Play'}
            >
                {!running ? 
                (<Image source={ Play }/>) : 
                (<Image source={ Pause }/>)}
                
            </Pressable>

            </View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => {
                    setSectionActive(0);
                    }}
                    label={'1 min'}
                    active={sectionActive===0}
                />
                <Button
                    onPress={() => {
                    setSectionActive(1);
                    }}
                    label={'2 min'}
                    active={sectionActive===1}
                />
                <Button
                    onPress={() => {
                    setSectionActive(2);
                    }}
                    label={'3 min'}
                    active={sectionActive===2}
                />
            </View>    
        <Image source={ running ? LogoEnabled : LogoDisabled } style={styles.imageView} fill="#fff" /> 
        </SafeAreaView>
    );
};

export default CircleProgress;
