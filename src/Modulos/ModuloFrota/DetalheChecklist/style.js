import {StyleSheet} from 'react-native';

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
    backgroundColor: '#d21e2b',
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
    borderBottomColor:"#808080" 
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
    color: "#d21e2b"
  },

  txtLabel:{
    fontFamily: 'BebasNeue-Regular',
    color: "#000",
    fontSize: 20,
    marginStart: 15,
  },

  txtValue:{
    fontFamily: 'BebasNeue-Regular',
    color: "#d21e2b",
    fontSize: 20
  },

  buttonDown:{
  flexDirection: 'row',
  paddingHorizontal: 7,
  borderWidth: 1, 
  justifyContent: 'center',
  height: 50,
  borderColor: "#d21e2b",
  fontFamily: 'BebasNeue-Regular',
  alignItems: 'center',
  backgroundColor: "#d21e2b"
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
    height: 50, 
    alignSelf: 'flex-end', 
    backgroundColor: "#fff"
  },

  containerAlert:{
    width: "80%",
    borderRadius: 15
  },

   txtTitleAlert:{
    fontSize: 25,
    color: "#d21e2b",
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
    color: '#fff',
    fontFamily: 'BebasNeue-Regular'
  },
})

export default styles;



