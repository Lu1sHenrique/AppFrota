import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

//libs
import * as Animatable from 'react-native-animatable';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
//pages
import styles from './style';

export default function PageHeader() {
    
    const navigation = useNavigation();


 return (
    <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
    <View style={styles.lineButtonLogo}>
      <Animatable.View animation="fadeInLeft" style={styles.icon}>
        <TouchableOpacity
        style={{padding: 20}}
        onPress={ () => navigation.navigate('DrawerItems')}
        >
          <IconFeather name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </Animatable.View>
      <View
      style={styles.ContainerLogo}>
        <Image source={require('../../assets/logo_login.png')}
        style={styles.LogoHome} 
        />
      </View>
    </View>
  </Animatable.View>
  );
}