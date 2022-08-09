
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
});
