import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

//libs
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../Contexts/Auth'
import {useNetInfo} from "@react-native-community/netinfo";
import ModalErroNetwok from '../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import AsyncStorage from '@react-native-async-storage/async-storage';

//pages
import styles from './style'

export default function HomeModulos() {

  const netInfo = useNetInfo();

  const [userName, setUserName] = useState("")

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)

  useEffect(() => {
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  }, [netInfo]);

  useEffect(() => {
    async function buscarUserNameAsyncStorage() {
      const userName = await AsyncStorage.getItem('@ListApp:userName');
      userName ? setUserName(userName.replaceAll('"', '')) : null
    }

    buscarUserNameAsyncStorage();
  }, []);


  const showAlert = () =>
  Alert.alert(
    "Módulo disponível em breve!"
  );

  const {user} = useContext(AuthContext)

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
          <View style={{width: '90%', flexDirection: 'row', alignSelf: 'center', width: '90%'}}>
            <Animatable.View animation="fadeInLeft" style={styles.icon}>
              <TouchableOpacity
              onPress={ () => navigation.openDrawer()}
              >
                <Icon name="menu" size={30} color="#fff" />
              </TouchableOpacity>
            </Animatable.View>
            <View
            style={styles.ContainerLogo}>
              <Image source={require('../assets/logo_login.png')}
              style={styles.LogoHome} 
              />
            </View>
          </View>
        </Animatable.View>
        
        <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

        <Animatable.View animation="fadeInDown" style={styles.containerNomeHeader}>
          <View style={{width: '100%'}}>
            <Text style={styles.textOla}>Seja bem vindo,</Text>
            <Text style={styles.textBold}>{user.usuario ? user.usuario : userName}</Text>
          </View>
        </Animatable.View>
        {/*botoes modulos*/}
        <View style={styles.containerButtonsMod}>
          {/*linha com dois botoes*/}
          <View style={styles.containerRow}>
            {/*botao frota*/}
            <Animatable.View animation="fadeInDown" style={styles.containerButton}>
              <Animatable.View animation="fadeInLeft">
                  <TouchableOpacity style={styles.button}
                    onPress={ () => navigation.navigate('HomeFrota')}
                    >
                      <Icon style={styles.iconButtonModulos} name="truck" size={30} color="#fff" />
                      <Text style={styles.textButton}>
                        Frota
                      </Text>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>

              <Animatable.View animation="fadeInDown" style={styles.containerButton}>
              <Animatable.View animation="fadeInRight">
                <TouchableOpacity style={styles.button}
                onPress={(showAlert)}>
                  <Icon style={styles.iconButtonModulos} name="briefcase" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    Comercial
                  </Text>
                </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
            </View>
  
            <View style={styles.containerRow}>

              <Animatable.View animation="fadeInLeft" style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                onPress={(showAlert)}>
                    <Icon style={styles.iconButtonModulos} name="tool" size={30} color="#fff" />
                    <Text style={styles.textButton}>
                      Técnica
                    </Text>
                </TouchableOpacity>
              </Animatable.View>

              <Animatable.View animation="fadeInRight"  style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                onPress={(showAlert)}>
                <Icon style={styles.iconButtonModulos} name="users" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    RH
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>

            <View style={styles.containerRow}>

            <Animatable.View animation="fadeInUp" style={styles.containerButton}>
              <Animatable.View animation="fadeInLeft">
                <TouchableOpacity style={styles.button}
                onPress={(showAlert)}>
                  <Icon style={styles.iconButtonModulos} name="archive" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    Estoque
                  </Text>
                </TouchableOpacity>
                </Animatable.View>
            </Animatable.View>

              <Animatable.View animation="fadeInUp" style={styles.containerButton}>
              <Animatable.View animation="fadeInRight">
                <TouchableOpacity style={styles.button}
                onPress={(showAlert)}>
                  <Icon style={styles.iconButtonModulos} name="dollar-sign" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    Financeiro
                  </Text>
                </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
            </View>
        </View>
      </View>
  );
};

