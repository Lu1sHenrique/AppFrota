import { StyleSheet } from 'react-native';
import colors from '../Utils/colors'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  containerButtonsMod: {
    marginTop: 20
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
    paddingBottom: 10,
    paddingTop: 40,
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

  containerNomeHeader: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },

  textOla: {
    fontSize: 25,
    color: colors.gray,
    alignSelf: 'center',
    fontFamily: 'BebasNeue-Regular'
  },

  textBold: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 44,
    color: colors.red,
    alignSelf: 'center',
    textTransform: 'capitalize',
    fontFamily: 'BebasNeue-Regular'
  },

  containerRow: {
    flexDirection: 'row',
    marginTop: 30
  },

  containerButton: {
    flex: 0.5,
    marginHorizontal: 30
  },

  button: {
    backgroundColor: colors.red,
    paddingVertical: 30,
    borderRadius: 20,
    borderWidth: 1
  },

  textButton: {
    fontSize: 22,
    fontFamily: 'BebasNeue-Regular',
    alignSelf: 'center',
    color: colors.white,
    marginTop: 10,
  },

  iconButtonModulos: {
    alignSelf: 'center',
    marginTop: -10
  }
})

export default styles;