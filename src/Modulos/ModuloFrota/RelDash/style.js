import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
    flex: 1
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

  Chart:{
    width: '100%',
    alignItems: 'center',
  },

  ContainerLabels:{
    flexDirection:'row',
    width: '100%', 
    justifyContent: 'space-around',
    marginBottom: 20
  },

  txtLabels:{
    fontSize: 20, 
    color: '#000', 
    fontFamily: 'BebasNeue-Regular'
  }
})

export default styles;


