import React, {useContext} from 'react';
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
import { mdiGasStation } from '@mdi/js'

//pages
import styles from './style'

export default function HomeFrota({ navigation: { goBack } }) {

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
                <IconFeather name="menu" size={30} color="#fff" />
              </TouchableOpacity>
            </Animatable.View>
            <View
            style={styles.ContainerLogo}>
              <Image source={require('../../../assets/logo_login.png')}
              style={styles.LogoHome} 
              />
            </View>
          </View>
        </Animatable.View>

        <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => goBack()}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 28}}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerTxt}>
                <Text style={{fontSize: 30}}>
                    Escolha o tipo da
                </Text>
                <Text style={{fontSize: 40, fontWeight: 'bold'}}>
                    Frota
                </Text>
            </View>
        </View>

        <View style={styles.ContainerButton}>
            <View style={styles.ContainerButtonSolo}>
                <TouchableOpacity 
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('RoutesFrota')}
                >
                    <IconMaterial size={80} name="local-gas-station" color='#fff' />
                    <Text style={{fontSize: 30,  color: '#fff'}}>Combustão</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.Container2Button}>
            <View style={styles.ContainerButtonSolo}>
                <TouchableOpacity 
                style={{alignItems: 'center'}}
                onPress={() => navigation.navigate('FormFrotaEletrica')}
                >
                    <IconMaterial size={80} name="bolt" color='#fff' />
                    <Text style={{fontSize: 30, color: '#fff'}}>Elétrica</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.BarFooter}>
                <Text> </Text>
        </View>


    </View>
  );
};



