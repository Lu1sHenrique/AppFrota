import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container:{
        flex: 1,
      },

  containerButtonsMod:{
    marginTop: 80
  },

  icon:{
    marginHorizontal: 20,
    marginTop: 10
  },

  containerNomeHeader:{
    position: 'absolute',
    width: 330,
    justifyContent: 'center',
    marginTop: 17,
    marginLeft: 60
  },

  containerCaixa:{
    backgroundColor: '#38a69d',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 15,
    paddingTop: 10
  },

  textOla:{
    fontSize: 25,
    color: "#000"
  },

  textBold:{
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 50,
    fontSize: 25,
    color: "#000"
  },

  containerRow:{
    flexDirection:'row',
    marginTop: 30
  },

  containerButton:{
  flex: 0.5,
  marginHorizontal: 30
  },

  button:{
    backgroundColor: 'black',
    paddingVertical: 30,
    borderRadius: 20
  },

  textButton:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    marginTop: 10
  },

  iconButtonModulos:{
    alignSelf: 'center',
    marginTop: -10
  }
})

export default styles;



