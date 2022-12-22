import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';


const styles = StyleSheet.create({
  buttonItemCheck: {
    flex: 1,
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
})

export default styles;