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
            </TouchableOpacity>
          </Animatable.View>


      </View>
  );
};



