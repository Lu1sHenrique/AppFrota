import React, {useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


//libs
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../contexts/Auth'

//pages
import styles from './style'

export default function HomeModulos() {

  const {user} = useContext(AuthContext)

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <ImageBackground  
        source={require('../assets/Fundo.png')} 
        style={{width: "100%", height: "100%"}}  
        >
         {/*caixa header*/} 
        <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
          {/*botao config*/}
          <Animatable.View animation="fadeInLeft" style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.navigate('HomeConfig')}
            >
              <Icon name="settings" size={30} color="#fff" />
            </TouchableOpacity>
          </Animatable.View>
            {/*texto usuario header*/}
            <Animatable.View animation="fadeInDown" style={styles.containerNomeHeader}>
              <View style={{marginLeft: 40}}>
                <Text style={styles.textOla}>Olá,</Text>
                <Text style={styles.textBold}>{user.usuario}</Text>
              </View>
            </Animatable.View>
          </Animatable.View>

        {/*botoes modulos*/}
        <View style={styles.containerButtonsMod}>
          {/*linha com dois botoes*/}
          <View style={styles.containerRow}>
            {/*botao frota*/}
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

              {/*botao comercial*/}
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

            {/*linha com dois botoes*/}  
            <View style={styles.containerRow}>
              {/*botao tecnica*/}
              <Animatable.View animation="fadeInLeft" style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Icon style={styles.iconButtonModulos} name="tool" size={30} color="#fff" />
                    <Text style={styles.textButton}>
                      Técnica
                    </Text>
                </TouchableOpacity>
              </Animatable.View>

              {/*botao rh*/}
              <Animatable.View animation="fadeInRight"  style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                <Icon style={styles.iconButtonModulos} name="users" size={30} color="#fff" />
                  <Text style={styles.textButton}>
                    RH
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>

            {/*linha com dois botoes*/}
            <View style={styles.containerRow}>
              {/*botao estoque*/}
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
              {/*botao financeiro*/}
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



