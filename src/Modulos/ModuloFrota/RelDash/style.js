import { StyleSheet } from 'react-native';
import colors from '../../../Utils/colors';

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

  Chart: {
    width: '100%',
    alignItems: 'center',
  },

  ContainerLabels: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20
  },

  txtLabels: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'BebasNeue-Regular'
  },

  NumerokmRodadosMes: {
    fontSize: 80,
    color: colors.red,
    fontFamily: 'BebasNeue-Regular',
  },

  textkmRodados: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: colors.red,
    fontFamily: 'BebasNeue-Regular',
    marginBottom: 12
  },

  textEm: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: colors.red,
    fontFamily: 'BebasNeue-Regular',
    marginBottom: 6
  },

  textMes: {
    alignSelf: 'flex-end',
    fontSize: 50,
    color: colors.red,
    fontFamily: 'BebasNeue-Regular',
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
})

export default styles;