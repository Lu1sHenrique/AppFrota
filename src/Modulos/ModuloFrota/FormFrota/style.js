import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
    flex: 1
  },

  textHeader:{
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 18
  },

  icon:{
    marginHorizontal: 10,
    marginTop: 10
  },

  textConfig:{
      fontSize: 25,
      color: "#fff"
  },

  containerCaixa:{
    backgroundColor: '#f77b77',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 15,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  
  boxTitle:{
    marginTop: 12
  },

  textTitle:{
    fontSize: 30,
    textAlign: 'center',
    color: '#f77b77',
    width: '100%'
  },

  txtCaption:{
    fontSize: 25,
    marginTop: 15,
    color: '#f77b77',
    marginLeft: 15
  },

  input:{
    alignSelf: 'center',
    width: '95%',
    height: 50,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    borderBottomWidth: 1
  },

  button:{
    marginTop: 15,
    alignSelf: 'center',
    width: '90%',
    height: 45,
    backgroundColor: '#f77b77',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },

  labelError:{
    alignSelf: 'flex-start',
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
    alignItems: 'flex-start',
    marginLeft: 12,
    borderRadius: 10,
    width: '93%',
    borderWidth: 1,
    backgroundColor: '#f77b77',
    marginTop: 8,
    marginBottom: 8
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
    backgroundColor: '#f77b77',
    alignItems: 'center',
    marginVertical: 7,
    borderWidth: 1
  },

  panelTitle: {
    fontSize: 20,
    height: 35,
    color: '#f77b77',
  },

  panelSubtitle: {
    fontSize: 16,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    color: '#f77b77',
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },



})

export default styles;



0