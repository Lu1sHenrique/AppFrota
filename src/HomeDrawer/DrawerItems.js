import React from 'react';
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
import { DrawerActions, useNavigation } from '@react-navigation/native'


export default function DrawerItems() {

  const logout = (navigation) =>{
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

  return (
    <Animatable.View animation="slideInLeft" style={styles.container}>
      <View style={styles.ContainerHeader}>
        <View style={styles.ContainerLogo}>
          <Image source={require('../assets/logo_login.png')} style={styles.Logo}/>
        </View>
        <View style={styles.ContainerIcon}>
          <View style={styles.ButtonIcon}>
              <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
              >
                <Icon name="x-circle" size={35} color="#fff"/>
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
                onPress={()=> logout(navigation)}
                >
                  <Text style={styles.txtDrawerItem}>Sair</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
      <View style={styles.ContainerFooter}>
          <View style={styles.RowFooter}>
              <TouchableOpacity style={styles.ButtonFooter}>
                <Icon style={styles.IconFooter} name="help-circle" size={20} color="#fff" />
                <Text style={styles.txtFooter}>Dúvidas?</Text>
              </TouchableOpacity>      
              <TouchableOpacity style={styles.ButtonFooter}>
                  <Icon style={styles.IconFooter} name="alert-triangle" size={20} color="#fff" />
                  <Text style={styles.txtFooter}>Reportar Erro</Text>
              </TouchableOpacity>
              </View>          
        </View>
    </Animatable.View>
  );
};



