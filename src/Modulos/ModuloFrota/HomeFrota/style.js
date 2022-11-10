import {StyleSheet} from 'react-native';
import colors from '../../../Utils/colors';

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: colors.white
  },

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

  ContainerLogo: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  LogoHome:{
    width: '100%',
    height: 80,
    borderWidth: 1
  },

  ContainerButtonBack:{
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderBottomColor:colors.red 
  },

  ButtonBack:{
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: '5%'
  },

  IconBack:{
    marginRight: 15,
    color: colors.red
  },

  ContainerTxt:{
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: '4%'
  },

  ContainerButton:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 10
  },

  Container2Button:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },

ContainerButtonSolo:{
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    width: '70%',
    paddingVertical: 10, 
    backgroundColor: colors.red 
},
  
BarFooter:{
    backgroundColor: colors.red, 
    paddingVertical: 3, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    width: '85%', 
    alignSelf: 'center'
  }
})

export default styles;



