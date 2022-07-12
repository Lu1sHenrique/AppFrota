import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container:{
        flex: 1,
        backgroundColor: '#f4f4f4'
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
    paddingBottom: 10,
    paddingTop: 40,
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
    borderBottomColor:"#d21e2b" 
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

  ContainerTxt:{
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: 40
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
    alignItems: 'center',
    marginBottom: 125
  },

ContainerButtonSolo:{
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    paddingHorizontal: 70, 
    paddingVertical: 10, 
    backgroundColor: '#d21e2b' 
},

Container2ButtonSolo:{
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10, 
    paddingHorizontal: 100, 
    paddingVertical: 10, 
    backgroundColor: '#d21e2b'
  },
  
BarFooter:{
    backgroundColor: '#d21e2b', 
    paddingVertical: 10, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    width: '85%', 
    alignSelf: 'center'
  }
})

export default styles;



