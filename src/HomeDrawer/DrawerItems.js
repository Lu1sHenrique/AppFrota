import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from 'react-native';

//libs
import Icon from 'react-native-vector-icons/Feather';
import styles from './style'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../Utils/colors';

export default function DrawerItems() {

  const logout = async (navigation) =>{
      await AsyncStorage.removeItem('@ListApp:userToken')
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
      })
}

  const showAlert = () =>
  Alert.alert(
    "Módulo disponível em breve!"
  );

  const navigation = useNavigation();

  const [showDuvidas, setShowDuvidas] = useState(false)
  const [showSair, setShowSair] = useState(false)

  const hideAlertDuvidas = () => (
    setShowDuvidas(false)
  );

  const hideAlertSair = () => (
    setShowSair(false)
  );

  function exibirAlerta(){
    setShowDuvidas(true)
  }

  function exibirAlertaSair(){
    setShowSair(true)
  }

  return (
    <Animatable.View animation="slideInLeft" style={styles.container}>
      <View style={styles.ContainerHeader}>
        <View style={styles.ContainerLogo}>
          <Image source={require('../assets/logo_login.png')} style={styles.Logo}/>
        </View>
        <View style={styles.ContainerIcon}>
          <View style={styles.ButtonIcon}>
              <TouchableOpacity
              style={{padding: 2}}
              onPress={() => navigation.goBack()}
              >
                <Icon name="x-circle" size={35} color={colors.white}/>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.ContainerDrawerItem}>
          <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={() => navigation.navigate('HomeModulos')}
                >
                  <Text style={styles.txtDrawerItem}>Inicio</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={() => navigation.navigate('HomeFrota')}
                >
                  <Text style={styles.txtDrawerItem}>Frota</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={(showAlert)}
                >
                  <Text style={styles.txtDrawerItem}>Comercial</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={(showAlert)}
                >
                  <Text style={styles.txtDrawerItem}>Técnica</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={(showAlert)}
                >
                  <Text style={styles.txtDrawerItem}>RH</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={(showAlert)}
                >
                  <Text style={styles.txtDrawerItem}>Financeiro</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={() => navigation.navigate('RoutesFrota')}
                >
                  <Text style={styles.txtDrawerItem}>Fomulário Frota Combustão</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={() => navigation.navigate('FormFrotaEletrica')}
                >
                  <Text style={styles.txtDrawerItem}>Fomulário Frota Elétrica</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DrawerItem}>
                <TouchableOpacity
                onPress={exibirAlertaSair}
                >
                  <Text style={styles.txtDrawerItem}>Sair</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
      <View style={styles.ContainerFooter}>
          <View style={styles.RowFooter}>
              <TouchableOpacity 
              style={styles.ButtonFooter}
              onPress={exibirAlerta}
              >
                <Icon style={styles.IconFooter} name="help-circle" size={20} color={colors.white} />
                <Text style={styles.txtFooter}>Dúvidas?</Text>
              </TouchableOpacity>      
              <TouchableOpacity 
              style={styles.ButtonFooter}
              onPress={() => navigation.navigate('ReportsErro')}
              >
                  <Icon style={styles.IconFooter} name="alert-triangle" size={20} color={colors.white} />
                  <Text style={styles.txtFooter}>Reportar Erro</Text>
              </TouchableOpacity>
              </View>          
        </View>

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showDuvidas}
          showProgress={false}
          message='Se tiver qualquer dúvida envie um email para "suporteti@maximaseguranca.com" ou ligue para o ramal "8128" que entraremos em contato assim que possível.😁'
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor={colors.red}
          onConfirmPressed={() => {
            hideAlertDuvidas();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          cancelButtonStyle={styles.ButtonAlert}
          confirmButtonStyle={styles.ButtonAlert}
          cancelButtonTextStyle={styles.txtButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showSair}
          showProgress={false}
          message="Tem certeza que deseja sair?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Não"
          confirmText="Sim"
          confirmButtonColor={colors.red}
          cancelButtonColor={colors.gray}
          onCancelPressed={() => {
            hideAlertSair();
          }}
          onConfirmPressed={() => logout(navigation)}
        />
    </Animatable.View>
  );
};



