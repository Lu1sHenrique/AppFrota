import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
    flex: 1,
  },

  containerHeader:{
   marginTop: 150,
   width: "100%"
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color:"black",
    marginBottom: 30
  },

  containerInput:{
    marginTop: '25%',
    marginHorizontal: 30,
  },

  title:{
    fontSize: 20,
    marginTop: 28,
    color: "black",
  },

  input:{
    borderWidth: 1,
    height: 50,
    borderColor: '#fff',
    marginBottom: 12,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 30,
    color: '#fff',
    width: '100%'
  },
  inputHidePass:{
    height: 50,
    marginBottom: 12,
    fontSize: 16,
    paddingHorizontal: 30,
    color: '#fff',
    width: '85%'
  },
  ContainerHidePass:{
    flexDirection: 'row',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%'
  },

  iconHidePass:{
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button:{
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 8,
    justifyContent: 'center',
    paddingVertical: 15
  },

  buttonText:{
    color: "#d21e2b",
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
    color: "#fff",
    fontSize: 15
  },

  modal:(text='none')=>({
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 15,
    position: 'absolute',
    marginVertical: 325,
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



