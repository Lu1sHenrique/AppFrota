import { StyleSheet } from 'react-native';
import colors from '../../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    width: "80%",
    justifyContent: 'space-evenly',
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },

  txtErro: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 23,
    fontFamily: 'BebasNeue-Regular',
  }



})

export default styles;