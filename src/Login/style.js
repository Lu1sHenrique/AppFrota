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

  containerInput:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title:{
    fontSize: 20,
    marginTop: 28,
    color: "black",
  },

  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  iconHidePass:{
    borderWidth: 1,
    width: '15%',
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
  },

  modal:(text='none')=>({
    backgroundColor: '#f77b77',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 15,
    position: 'absolute',
    marginVertical: 250,
    display: text
  }),

  containerAvisoModalBadLogin:{
    borderBottomWidth: 1,
    width: "85%",
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 8
  },

  textAvisoModalBadLogin:{
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },

  textModalBadLogin:{
    color: '#000',
    fontSize: 20,
    paddingVertical: 8,
    marginTop: 7
  },

  buttonOkModalBadLogin:{
    width: '60%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    marginTop: 5
  },

  txtOkButton:{
    color: '#fff',
    fontSize: 16
  }

})

export default styles;



