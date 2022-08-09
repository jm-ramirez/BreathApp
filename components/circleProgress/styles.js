
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top:170,
    textAlign:'center'
  },
  scrollContainer: {
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
     marginTop: 50,
  },
  button: {
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
    marginHorizontal: 5,
    borderColor: 'rgba(255,255,255,0.6)',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonLabel: { fontSize: 12, fontWeight: '400', color: 'white', fontFamily:'BRHendrix-Regular' },
  tag: {
    position: 'absolute',
    //left: 140,
    top: 212,
    width: 6,
    height: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#fff',
    backgroundColor: '#6836C4',
  },
  
  subTitle: {
    position: 'absolute',
    width: '100%',
    top: -40,
    fontFamily: 'BRHendrix-Regular',
    fontWeight:'600',
    fontSize:18,
    textAlign:'center',
    color:'#FFFFFF',
    // lineHeight: 121.4%
    letterSpacing: -0.03
},
imageView: {
  alignSelf: 'center',
  zIndex:5000,
  top:-318
}
});
