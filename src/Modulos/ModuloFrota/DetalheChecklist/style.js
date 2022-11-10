import {StyleSheet} from 'react-native';
import colors from '../../../Utils/colors';

const styles = StyleSheet.create({
    container:{
    flex: 1,
    margin: 50
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
})

export default styles;



