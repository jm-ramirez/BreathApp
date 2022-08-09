
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    circle: {
      position: "absolute",
      top: 200,
      width: 160,
      height: 160,
      borderRadius: 80,
      backgroundColor: '#7B66FF',
      opacity:0.8
    },
    circle2: {
      position: "absolute",
      top: 185,
      width: 190,
      height: 190,
      borderRadius: 95,
      backgroundColor: '#7B66FF',
      opacity:0.4
    },
    circle3: {
      position: "absolute",
      top: 170,
      opacity:0.4
    },
    imageView: {
      alignSelf: 'center',
      zIndex:5000,
      top:-150
  }
});
