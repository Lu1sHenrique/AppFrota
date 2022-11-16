import {StyleSheet} from 'react-native';
import colors from '../../../Utils/colors';

const styles = StyleSheet.create({
    container:{
    flex: 1,
    margin: 50
  },

  containerModal:{
    width: '85%',
    height: '85%',
    borderWidth: 1,
    borderColor: colors.red,
    alignSelf: 'center',
    marginVertical: 60,
    backgroundColor: colors.white,
    borderRadius: 15
  },

  ButtonFecharModal:{
    backgroundColor: colors.red,
    marginRight: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },  

  txtButtonFechar:{
    color: colors.white,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 20
  },

  ButtonDownFoto:{
    backgroundColor: colors.red,
    marginRight: 20,
    borderRadius: 15,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
    borderBottomColor:colors.gray 
  },

  ButtonBack:{
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 25
  },

  IconBack:{
    marginRight: 15,
    color: colors.red
  },

  txtLabel:{
    fontFamily: 'BebasNeue-Regular',
    color: colors.black,
    fontSize: 20,
    marginStart: 15,
  },

  txtValue:{
    fontFamily: 'BebasNeue-Regular',
    color: colors.red,
    fontSize: 20
  },

  buttonDown:{
  flexDirection: 'row',
  paddingHorizontal: 7,
  borderWidth: 1, 
  justifyContent: 'center',
  height: 50,
  borderColor: colors.red,
  fontFamily: 'BebasNeue-Regular',
  alignItems: 'center',
  backgroundColor: colors.red
  },

  containerIconArrowButtons:{
    position: 'absolute', 
    height: "100%", 
    justifyContent: 'flex-end', 
    alignSelf: 'flex-end'
  },

  IconArrowButtons:{
    justifyContent: 'center', 
    width: '100%', 
    height: 55, 
    alignSelf: 'flex-end', 
    backgroundColor: colors.white
  },

  containerAlert:{
    width: "80%",
    borderRadius: 15
  },

   txtTitleAlert:{
    fontSize: 25,
    color: colors.red,
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular'
  },

  ButtonAlert:{
    width: "35%",
    marginHorizontal: 13,
    paddingVertical: 15
  },

  txtButtonAlert:{
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
    fontFamily: 'BebasNeue-Regular'
  },

  containerFoto:{ 
    marginVertical: 15,
    width: '90%',
    height: '87%', 
    alignSelf: 'center',
    borderRadius: 15,
    resizeMode: 'contain'
  }
})

export default styles;



