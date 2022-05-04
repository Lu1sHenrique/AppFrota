import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container:{
        flex: 1,
      },

  containerRow:{
    flexDirection:'row',
    marginTop: 60
  },

  containerButton:{
   flex: 0.5,
   marginHorizontal: 30,
  },

  button:{
    backgroundColor: 'black',
    paddingVertical: 40,
    borderRadius: 20
  },

  textButton:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  }
})

export default styles;



