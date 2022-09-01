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
  

  txtCaption:{
    fontSize: 25,
    marginTop: 15,
    color: '#f77b77',
    marginLeft: 15
  },

  input:{
    alignSelf: 'center',
    width: '85%',
    height: 50,
    paddingHorizontal: 16,
    marginTop: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: "#d21e2b",
    borderBottomColor: "#d21e2b",
    borderLeftColor: "#d21e2b",
    borderRightColor: "#d21e2b",
    color: "#d21e2b"
  },

  button:{
    marginTop: 15,
    alignSelf: 'center',
    width: '85%',
    height: 45,
    backgroundColor: "#d21e2b",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },

  labelError:{
    alignSelf: 'center',
    color: '#ff375b',
    marginBottom: 8,
    marginLeft: 10
  },

  txtButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  buttonArquivo:{
    alignSelf: 'center',
    width: '85%',
    borderWidth: 1,
    backgroundColor: "#d21e2b",
    marginTop: 5
  },

  txtButtonEnviar:{
    paddingVertical: 15,
    justifyContent: 'center',
    color:'#fff', 
    fontSize: 17,
    marginLeft: 40
  },

  txtButtonPicker:{
    paddingVertical: 15,
    justifyContent: 'center',
    color:'#fff', 
    fontSize: 17,
    marginLeft: 40
  },

  iconButtonUpLoad:{
      position: 'absolute',
      marginLeft: 9,
      paddingVertical: 13
  },

  iconButonPicker:{
    position: 'absolute',
    right:40,
    paddingVertical: 15
  },

  iconButtonEnviar:{
    position: 'absolute',
    right:115
},

  header:{
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 15,
  },

  panel:{
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 5
  },

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle:{
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  panelButton: {
    width: '100%',
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#d21e2b",
    alignItems: 'center',
    marginVertical: 7,
    borderWidth: 1
  },

  panelTitle: {
    fontSize: 20,
    height: 35,
    color: "#d21e2b",
  },

  panelSubtitle: {
    fontSize: 16,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    color: "#d21e2b",
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },

  ContainerRonda:{
    borderBottomWidth: 1, 
    borderBottomColor:"#d21e2b", 
    marginBottom: 20
  },

  containerAlert:{
    width: "80%",
    height: "25%",
    borderRadius: 15
  },

  txtTitleAlert:{
    fontSize: 25,
    color: "#d21e2b",
    textAlign: 'center'
  },

  ButtonAlert:{
    width: "35%",
    marginHorizontal: 13,
    paddingVertical: 15
  },

  txtButtonAlert:{
    fontSize: 15,
    alignSelf: 'center',
    color: '#fff'
  },

  


})

export default styles;



0