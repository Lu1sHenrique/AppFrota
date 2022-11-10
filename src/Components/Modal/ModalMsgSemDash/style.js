import {StyleSheet} from 'react-native';
import colors from '../../../Utils/colors'

const styles = StyleSheet.create({
    container:{
    flex: 1,
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon:{
    opacity: 0.3
  },

  txt:{
    fontSize: 30,
    fontFamily: 'BebasNeue-Regular',
    opacity: 0.3,
    color: colors.black 
  }
})

export default styles;