import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';


//libs
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../../../Contexts/Auth'
import {useNetInfo} from "@react-native-community/netinfo";
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'

//pages
import styles from './style'
import PageHeader from '../../../Components/PageHeader/PageHeader'

export default function HomeFrota({ navigation: { goBack } }) {

  const netInfo = useNetInfo();

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)

  useEffect(() => {
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  }, [netInfo]);

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        
        <PageHeader/>

        <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => navigation.navigate('HomeModulos')}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 33, color: '#424242', fontFamily: 'BebasNeue-Regular'}}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

        <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerTxt}>
                <Text style={{fontSize: 38, color: '#424242', fontFamily: 'BebasNeue-Regular'}}>
                    Escolha o tipo da
                </Text>
                <Text style={{fontSize: 44, fontFamily: 'BebasNeue-Regular', color: '#424242'}}>
                    Frota
                </Text>
            </View>
        </View>

        <View style={styles.ContainerButton}>
            <View style={styles.ContainerButtonSolo}>
                <TouchableOpacity 
                style={{alignItems: 'center', width: "100%"}}
                onPress={() => navigation.navigate('RoutesFrota')}
                >
                    <IconMaterial size={80} name="local-gas-station" color='#fff' />
                    <Text style={{fontSize: 33,  color: '#fff', fontFamily: 'BebasNeue-Regular'}}>Combustão</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.Container2Button}>
            <View style={styles.ContainerButtonSolo}>
                <TouchableOpacity 
                style={{alignItems: 'center', width: "100%"}}
                onPress={() => navigation.navigate('FormFrotaEletrica')}
                >
                    <IconMaterial size={80} name="bolt" color='#fff' />
                    <Text style={{fontSize: 33, color: '#fff', fontFamily: 'BebasNeue-Regular'}}>Elétrica</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.BarFooter}>
            <Text> </Text>
          </View>
        </View>
    </View>
  );
};



