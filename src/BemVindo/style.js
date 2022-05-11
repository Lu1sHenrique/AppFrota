import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f77b77'
  },

  containerLogo: {
    flex: 2,
    backgroundColor: '#f77b77',
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
    color: 'black',
    fontFamily: 'Oswald-Regular'
  },

  text:{
    color: '#a1a1a1',
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'OleoScriptSwashCaps-Bold'
  },

  button:{
      position: 'absolute',
      borderRadius: 50,
      paddingVertical: 8,
      width: '60%',
      alignSelf: 'center',
      bottom: '30%',
      backgroundColor: 'black',
      justifyContent: 'center'
  },

  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 55
  },

  icon:{
    position: 'absolute',
    right: 60
  }

})

export default styles;



