import React, {useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import styles from './style'
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../contexts/Auth'


export default function HomeModulos() {

  const {user} = useContext(AuthContext)

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <ImageBackground  
        source={require('../assets/Fundo.png')} 
        style={{width: "100%", height: "100%"}}  
        >
        <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
          <Animatable.View animation="fadeInLeft" style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.navigate('HomeConfig')}
            >
              <Icon name="settings" size={30} color="#fff" />
            </TouchableOpacity>
          </Animatable.View>

          
            <Animatable.View animation="fadeInDown" style={styles.containerNomeHeader}>
              <View style={{marginLeft: 40}}>
                <Text style={styles.textOla}>Olá,</Text>
                <Text style={styles.textBold}>{user.usuario}</Text>
              </View>
            </Animatable.View>
          </Animatable.View>

        <View style={styles.containerButtonsMod}>
          <View style={styles.containerRow}>
            <Animatable.View animation="fadeInDown" style={styles.containerButton}>
              <Animatable.View animation="fadeInLeft">
                  <TouchableOpacity style={styles.button}
                  onPress={ () => navigation.navigate('RoutesFrota')}
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
                <TouchableOpacity style={styles.button}>
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
                <TouchableOpacity style={styles.button}>
                <Icon style={styles.iconButtonModulos} name="tool" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    Técnica
                  </Text>
                </TouchableOpacity>
              </Animatable.View>

              <Animatable.View animation="fadeInRight"  style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
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
                <TouchableOpacity style={styles.button}>
                <Icon style={styles.iconButtonModulos} name="archive" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    Estoque
                  </Text>
                </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>

              <Animatable.View animation="fadeInUp" style={styles.containerButton}>
              <Animatable.View animation="fadeInRight">
                <TouchableOpacity style={styles.button}>
                <Icon style={styles.iconButtonModulos} name="dollar-sign" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    Financeiro
                  </Text>
                </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
            </View>
        </View>
        </ImageBackground>
      </View>
  );
};



