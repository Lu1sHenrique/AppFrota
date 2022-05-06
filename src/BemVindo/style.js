import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38a69d'
  },

  containerLogo: {
    flex: 2,
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerForm:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    alignSelf: 'center',
    color: 'black'
  },

  text:{
    color: '#a1a1a1',
    alignSelf: 'center',
    color: 'black'
  },

  button:{
      position: 'absolute',
      borderRadius: 50,
      paddingVertical: 8,
      width: '60%',
      alignSelf: 'center',
      bottom: '30%',
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
  },

  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

  icon:{
    position: 'absolute',
    right: 40
  }

})

export default styles;



