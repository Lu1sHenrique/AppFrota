import { StyleSheet } from 'react-native';
import colors from '../Utils/colors'
import stylesGlobal from '../Utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerHeader: {
    marginTop: 150,
    width: "100%"
  },

  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "black",
    marginBottom: 30
  },

  containerInput: {
    marginTop: '25%',
    marginHorizontal: 30,
  },

  title: {
    fontSize: 20,
    marginTop: 28,
    color: "black",
  },

  input: {
    borderWidth: 1,
    height: 50,
    borderColor: colors.white,
    marginBottom: 12,
    fontSize: 19,
    borderRadius: 10,
    paddingHorizontal: 30,
    color: colors.white,
    width: '100%',
    fontFamily: stylesGlobal.fontFamily
  },

  inputSms: {
    borderWidth: 1,
    height: 50,
    borderColor: colors.white,
    marginBottom: 12,
    fontSize: 19,
    borderRadius: 10,
    paddingHorizontal: 30,
    color: colors.white,
    width: '100%',
    fontFamily: stylesGlobal.fontFamily,
    marginTop: 15
  },

  inputHidePass: {
    height: 50,
    marginBottom: 12,
    fontSize: 19,
    paddingHorizontal: 30,
    color: colors.white,
    width: '85%',
    fontFamily: stylesGlobal.fontFamily
  },
  ContainerHidePass: {
    flexDirection: 'row',
    height: 50,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%'
  },

  iconHidePass: {
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 10,
    marginTop: 8,
    justifyContent: 'center',
    paddingVertical: 15
  },

  buttonText: {
    color: colors.red,
    fontSize: 22,
    fontFamily: stylesGlobal.fontFamily,
    alignSelf: "center"
  },

  icon: {
    position: 'absolute',
    right: 120
  },

  containerVersao: {
    marginTop: 50,
    alignSelf: 'center'
  },

  textversao: {
    color: colors.white,
    fontSize: 19,
    fontFamily: stylesGlobal.fontFamily
  },

  containerAlert: {
    width: "80%",
    borderRadius: 15
  },

  txtTitleAlert: {
    fontSize: 25,
    color: colors.red,
    textAlign: 'center',
    fontFamily: stylesGlobal.fontFamily
  },

  ButtonAlert: {
    width: "35%",
    marginHorizontal: 13,
    paddingVertical: 15
  },

  txtButtonAlert: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: stylesGlobal.fontFamily
  },

  containerAviso: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    height: 40,
    marginTop: -70,
    marginBottom: 70,
    justifyContent: 'center'
  },

  textAviso: {
    fontSize: 20,
    color: colors.white,
    fontFamily: stylesGlobal.fontFamily,
    alignSelf: 'center'
  }
})

export default styles;