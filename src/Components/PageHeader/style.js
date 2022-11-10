import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors'

const styles = StyleSheet.create({

  icon:{
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerCaixa:{
    backgroundColor: colors.red,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: '2%',
    paddingTop: '5%',
    borderWidth: 1
  },

  lineButtonLogo:{
    width: '90%', 
    flexDirection: 'row', 
    alignSelf: 'center', 
    width: '90%'
  },

  ContainerLogo: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  LogoHome:{
    width: '100%',
    height: 80,
    borderWidth: 1
  }
})

export default styles;