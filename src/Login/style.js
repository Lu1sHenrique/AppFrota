import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#f77b77'
  },

  containerHeader:{
   marginTop: '14%',
   marginBotton: '8%',
   paddingStart: '5%',
   alignItems: 'center'
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color:"black",
    marginBottom: 30
  },

  containerForm:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 20,
    marginTop: 28,
    color: "black"
  },

  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  button:{
    backgroundColor: 'black',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    paddingVertical: 15
  },

  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 130
  },

  icon:{
    position: 'absolute',
    right: 120
  },

  containerVersao:{
    marginTop: 50,
    alignSelf: 'center'
  },

  textversao:{
    color: "#000",
    fontSize: 15
  }

})

export default styles;



