import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';


const styles = StyleSheet.create({
  buttonItemCheck: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.red,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  txtbBttonItemCheckCodigo: {
    fontSize: 15,
    color: colors.black
  },

  txtbBttonItemCheckData: {
    fontSize: 15,
    color: colors.black,
    marginLeft: 20
  },

  txtbBttonItemCheckCondutor: {
    fontSize: 15,
    color: colors.black,
    marginLeft: 20
  },

  containerLeftAction:{
    justifyContent: 'center',
    height: 50,
    marginTop: 9,
    width: 50
  },

  containerRightAction:{
    justifyContent: 'center',
    height: 50,
    width: '25%',
    marginTop: 9,
    alignItems: 'center',
    borderRadius: 20
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
  }
})

export default styles;