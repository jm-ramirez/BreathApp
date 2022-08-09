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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Play from '../../assets/img/Play.png';
import Pause from '../../assets/img/Pause.png';

const Button = ({ onPress, label, active }) => (
  <TouchableOpacity style={{...styles.button, backgroundColor: active ? 'rgba(255, 255, 255, 0.2)': 'rgba(15, 16, 32, 0.3)'}} onPress={onPress}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

const CircleProgress = () => {
    const [running, setRunning] = useState(false);
    const [sectionActive, setSectionActive] = useState(0)
    useEffect(() => {
        progressRef.current.pause();
    }, [])
    
  const progressRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
        <CircularProgress
          value={100}          
          radius={110}
          activeStrokeColor={'background: rgba(15, 16, 32, 0.4)'}
          inActiveStrokeColor={'#ffffff'}
          inActiveStrokeOpacity={0.4}
          inActiveStrokeWidth={4}
          activeStrokeWidth={4}
          showProgressValue={false}
          onAnimationComplete={() => {
            console.log('callback');
            progressRef.current.reAnimate();
            progressRef.current.pause();
            setRunning(false)
          }}
          delay={1000}
          duration={sectionActive === 0 ? 60000 : sectionActive === 1 ? 120000 : 180000}
          ref={progressRef}
        />

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
    </SafeAreaView>
  );
};

export default CircleProgress;
