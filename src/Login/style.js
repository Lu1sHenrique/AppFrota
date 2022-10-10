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
    fontSize: 19,
    borderRadius: 10,
    paddingHorizontal: 30,
    color: '#fff',
    width: '100%',
    fontFamily: 'BebasNeue-Regular'
  },

  inputSms:{
    borderWidth: 1,
    height: 50,
    borderColor: '#fff',
    marginBottom: 12,
    fontSize: 19,
    borderRadius: 10,
    paddingHorizontal: 30,
    color: '#fff',
    width: '100%',
    fontFamily: 'BebasNeue-Regular',
    marginTop: 15
  },

  inputHidePass:{
    height: 50,
    marginBottom: 12,
    fontSize: 19,
    paddingHorizontal: 30,
    color: '#fff',
    width: '85%',
    fontFamily: 'BebasNeue-Regular'
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
    marginTop: 8,
    justifyContent: 'center',
    paddingVertical: 15
  },

  buttonText:{
    color: "#d21e2b",
    fontSize: 22,
    fontFamily: 'BebasNeue-Regular',
    alignSelf: "center"
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
    fontSize: 19,
    fontFamily: 'BebasNeue-Regular'
  },

  containerAlert:{
    width: "80%",
    borderRadius: 15
  },

   txtTitleAlert:{
    fontSize: 25,
    color: "#d21e2b",
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular'
  },

  ButtonAlert:{
    width: "35%",
    marginHorizontal: 13,
    paddingVertical: 15
  },

  txtButtonAlert:{
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'BebasNeue-Regular'
  },

})

export default styles;



