import React, { useState } from 'react';
import {
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
//pages
import styles from './style'



export default function DetalheChecklist({route}){


  const navigation = useNavigation();

  const [codigoChecklistCombustao] = useState(route.params.paramKey.codigoChecklistCombustao)
  const [codigoChecklistEletrica] = useState(route.params.paramKey.codigoChecklistEletrica)
  
    return(
      <View>
       <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
        <View style={{width: '90%', flexDirection: 'row', alignSelf: 'center', width: '90%'}}>
          <Animatable.View animation="fadeInLeft" style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.navigate('DrawerItems')}
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

        <View>
          <View style={styles.ContainerButtonBack}> 
            <TouchableOpacity
              style={styles.ButtonBack}
              onPress={() => navigation.goBack()}
              >
              <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
              <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: '#424242'}}>Detalhes checklist</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Código checklist: <Text style={styles.txtValue}>{route.params.paramKey.codigoChecklistCombustao ? codigoChecklistCombustao : codigoChecklistEletrica}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Data envio: <Text style={styles.txtValue}>{route.params.paramKey.dataEnvio}</Text></Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Hora envio: <Text style={styles.txtValue}>{route.params.paramKey.horaEnvio}</Text></Text>
            </View>

          {codigoChecklistCombustao ?
            <>
              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Carro Máxima: <Text style={styles.txtValue}>{route.params.paramKey.carroMaxima}</Text></Text>
              </View>

              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Carro Reserva: <Text style={styles.txtValue}>{route.params.paramKey.carroReserva}</Text></Text>
              </View>
            </> : 
            <>
              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Bateria Inicial: <Text style={styles.txtValue}>{route.params.paramKey.bateriaInicial}</Text></Text>
              </View>

              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Bateria Final: <Text style={styles.txtValue}>{route.params.paramKey.bateriaFinal}</Text></Text>
              </View>
            </> 
          }
          </View>

          <View style={{flexDirection: 'row', marginVertical: 15}}>
          {codigoChecklistEletrica ? 
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Diferença Bateria: <Text style={styles.txtValue}>{decodeURIComponent(route.params.paramKey.calcDiferenca.replaceAll('+', ' '))}</Text></Text>
            </View> : null
          }

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Departamento: <Text style={styles.txtValue}>{decodeURIComponent(route.params.paramKey.departamento.replaceAll('+', ' '))}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Condutor: <Text style={styles.txtValue}>{decodeURIComponent(route.params.paramKey.condutor.replaceAll('+', ' '))}</Text></Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Placa do veículo: <Text style={styles.txtValue}>{route.params.paramKey.placaVeiculo}</Text></Text>
            </View>

            {codigoChecklistCombustao ?
            <>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>KM Inicial: <Text style={styles.txtValue}>{route.params.paramKey.kmInicial}</Text></Text>
            </View>
            
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>KM Final: <Text style={styles.txtValue}>{route.params.paramKey.kmFinal}</Text></Text>
            </View>
            </> : null
            } 
          </View>

          {codigoChecklistCombustao ?
          <>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Rota ronda 1: <Text style={styles.txtValue}>{route.params.paramKey.rotaRonda1}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Rota ronda 2: <Text style={styles.txtValue}>{route.params.paramKey.rotaRonda2}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Rota ronda 3: <Text style={styles.txtValue}>{route.params.paramKey.rotaRonda3}</Text></Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Troca óleo: <Text style={styles.txtValue}>{route.params.paramKey.trocaOleo}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Pneu: <Text style={styles.txtValue}>{route.params.paramKey.pneu}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Correias: <Text style={styles.txtValue}>{route.params.paramKey.correias}</Text></Text>
            </View>
          </View>
          </> : null
          } 

          {codigoChecklistCombustao ?
          <View style={{flexDirection: 'row', marginStart: 15}}>
            <View style={{flexDirection: 'row', marginVertical: 15, marginRight: 20}}>
                <TouchableOpacity style={styles.buttonDown}>
                  <IconFeather style={{marginRight: 15}} name="download" size={25} color="#fff"/>
                  <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: '#fff'}}>Baixar foto Km Inicial</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 15}}>
              <TouchableOpacity style={styles.buttonDown}>
                <IconFeather style={{marginRight: 15}} name="download" size={25} color="#fff"/>
                <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: '#fff'}}>Baixar foto Km Final</Text>
              </TouchableOpacity>
            </View> 
          </View> 
            : 
           <View style={{flexDirection: 'row', marginStart: 15}}>
           <View style={{flexDirection: 'row', marginVertical: 15, marginRight: 20}}>
               <TouchableOpacity style={styles.buttonDown}>
                 <IconFeather style={{marginRight: 15}} name="download" size={25} color="#fff"/>
                 <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: '#fff'}}>Baixar foto Bateria Inicial</Text>
               </TouchableOpacity>
           </View>

           <View style={{marginTop: 15}}>
             <TouchableOpacity style={styles.buttonDown}>
               <IconFeather style={{marginRight: 15}} name="download" size={25} color="#fff"/>
               <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: '#fff'}}>Baixar foto Bateria Final</Text>
             </TouchableOpacity>
           </View> 
         </View>
        }
        </View>
      </View>
)
}
    




