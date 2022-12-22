import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../Utils/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  icon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerCaixa: {
    backgroundColor: colors.red,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: '2%',
    paddingTop: '5%',
    borderWidth: 1
  },

  ContainerLogo: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  LogoHome: {
    width: '100%',
    height: 80,
    borderWidth: 1
  },

  ContainerButtonBack: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray
  },

  ButtonBack: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25
  },

  IconBack: {
    marginRight: 15,
    color: colors.red
  },

  containerCheckBox: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.red
  },

  input: {
    alignSelf: 'center',
    width: '85%',
    height: 150,
    paddingHorizontal: 16,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.red,
    color: colors.red,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 19
  },

  button: {
    marginTop: 15,
    marginBottom: 20,
    alignSelf: 'center',
    width: '85%',
    height: 45,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },

  txtButton: {
    color: colors.white,
    fontSize: 25,
    fontFamily: 'BebasNeue-Regular',
  },

  buttonArquivo: {
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1,
    backgroundColor: colors.red,
    marginTop: 5
  },

  txtButtonEnviar: {
    paddingVertical: 15,
    justifyContent: 'center',
    color: colors.white,
    fontSize: 19,
    marginLeft: 40,
    fontFamily: 'BebasNeue-Regular'
  },

  txtButtonPicker: {
    paddingVertical: 15,
    justifyContent: 'center',
    color: colors.white,
    fontSize: 17,
    marginLeft: 40
  },

  iconButtonUpLoad: {
    position: 'absolute',
    marginLeft: 9,
    paddingVertical: 13
  },

  iconButonPicker: {
    position: 'absolute',
    right: 40,
    paddingVertical: 15
  },

  iconButtonEnviar: {
    position: 'absolute',
    right: 115
  },

  header: {
    backgroundColor: colors.white,
    shadowRadius: 2,
    shadowOpacity: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
  },

  panel: {
    padding: 20,
    backgroundColor: colors.white,
    paddingTop: 5
  },

  panelButton: {
    width: '100%',
    padding: 13,
    borderRadius: 10,
    backgroundColor: colors.red,
    alignItems: 'center',
    marginVertical: 7,
    borderWidth: 1
  },

  panelTitle: {
    fontSize: 23,
    fontFamily: 'BebasNeue-Regular',
    height: 35,
    color: colors.red,
  },

  panelSubtitle: {
    fontSize: 19,
    fontFamily: 'BebasNeue-Regular',
    color: 'gray',
    height: 30,
    marginBottom: 10,
    color: colors.red,
  },

  panelButtonTitle: {
    fontSize: 17,
    fontFamily: 'BebasNeue-Regular',
    color: colors.white
  },

  ContainerRonda: {
    borderBottomWidth: 1,
    borderBottomColor: colors.red,
    marginBottom: 20
  },

  containerAlert: {
    width: "80%",
    borderRadius: 15
  },

  txtTitleAlert: {
    fontSize: 25,
    color: colors.red,
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular'
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
    fontFamily: 'BebasNeue-Regular'
  },

  containerSliderFotos: {
    width: windowWidth / 1.2,
    borderWidth: 1,
    borderColor: colors.red,
    alignSelf: 'center'
  }
})

export default styles;