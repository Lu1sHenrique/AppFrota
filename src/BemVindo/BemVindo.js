import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './style'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';

export default function BemVindo() {

  const navigation = useNavigation();
  

  return (
      <View style={styles.container}>
          
          <View style={styles.containerLogo}>
            <Animatable.Image 
              animation="flipInY"
              source={require('../assets/logopreta.png')} 
              style={{ borderRadius: 50}}
              resizeMode='contain'
            />
          </View>

          <Animatable.View 
            delay={600}
            animation="fadeInUp"
            style={styles.containerForm}>
            <Text style={styles.title}>Gestão Interna Máxima</Text>
            <Text style={styles.text}>Faça login para começar</Text>
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Login')}
            >
               <Text style={styles.buttonText}>Acessar</Text>
               <Icon style={styles.icon} name="arrow-right-circle" size={20} color="#fff" />
            </TouchableOpacity>
          </Animatable.View>


      </View>
  );
};



