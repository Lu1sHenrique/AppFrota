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
    width: '15%',
    marginRight: 70,
    justifyContent: 'center'
  },

  ContainerDrawerItem:{
    marginTop: 20,
    marginBottom: 30
  },

  DrawerItem:{
    paddingLeft: 55,
    marginTop: 15,
    paddingVertical: 10
  },

  txtDrawerItem:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  ContainerFooter:{
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#9E161F',
    borderWidth: 1,
    height: 45
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
    marginTop: '2%'
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
  }

})

export default styles;



