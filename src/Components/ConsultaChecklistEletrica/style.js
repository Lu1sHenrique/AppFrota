import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    buttonItemCheck:{
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d21e2b',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    txtbBttonItemCheckCodigo:{
      fontSize: 15,
      color:  '#000',
      marginLeft: 10
    },

    txtbBttonItemCheckData:{
      fontSize: 15,
      color:  '#000',
      marginLeft: 20
    },

    txtbBttonItemCheckCondutor:{
      fontSize: 15,
      color:  '#000',
      marginLeft: 20
    },
})

export default styles;