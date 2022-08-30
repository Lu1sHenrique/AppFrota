import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#d21e2b',
      width: '100%'
  },

  Logo:{
    width: 200,
    height: 80,
  },

  ContainerHeader: {
    flexDirection: 'row',
    marginTop: 40
  },

  ContainerLogo: {
    width:'75%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '5%'
  },
  
  ContainerIcon:{
    width: '10%',
    marginRight: 70,
    justifyContent: 'center'
  },

  ContainerDrawerItem:{
    marginTop: 20,
    marginBottom: 30
  },

  DrawerItem:{
    paddingLeft: 55,
    marginVertical: 6,
    paddingVertical: 10
  },

  txtDrawerItem:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  ContainerFooter:{
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#9E161F'
  },

  ButtonFooter:{
    flexDirection: 'row',
    width: '40%',
    marginLeft: 10
  },

  IconFooter:{
    width: '17%'
  },

  txtFooter:{
    width: '83%',
    fontSize: 15,
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold'
  },

  RowFooter:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: '3%',
    marginBottom: '5%'
  }

})

export default styles;



