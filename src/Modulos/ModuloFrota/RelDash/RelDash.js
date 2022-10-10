import React, { useState, useEffect } from 'react';
import {
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  ScrollView
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { VictoryPie, VictoryTooltip } from 'victory-native'
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style'

const dados=[
    {
    id: '1',
    label: 'Km Rodados',
    value: '7000',
    color: '#ff8555',
    percent: '23%',
    mes: "Janeiro"
    },
    {
    id: '2',
    label: 'Consumo gasolina',
    value: '50',
    color: '#975fff',
    percent: '8%',
    mes: "Favereiro"
    },
    {
    id: '3',
    label: 'Horas fora',
    value: '150',
    color: '#8f5e',
    percent: '52%',
    mes: "Março"
    }
]

export default function RelDash(){

    useEffect(()=>{
        setData(dados)
    }, [])

const [data, setData] = useState([])
const [mes, setMes] = useState([]);
const [mesSelecionado, setMesSelecionado] = useState([]);

const navigation = useNavigation();
  
    return(
    <ScrollView style={styles.container}>
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
              <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: '#424242'}}>Dashboard Frota</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Picker
            selectedValue={mesSelecionado}
            onValueChange={(itemValue) =>
              setMesSelecionado(itemValue)
            }
              dropdownIconColor='#fff'
              style={{
              backgroundColor:'#d21e2b',
              width: '85%',
              alignSelf: 'center',
              color: '#fff',
              marginTop: 5,
              fontFamily: 'BebasNeue-Regular'
            }}
            dropdownIconRippleColor='#fff'
            >
              <Picker.Item 
              label='Mês' 
              style={{
                color: '#000',
                fontFamily: 'BebasNeue-Regular'
              }}
              />
              {
              data.map(id => {
                return <Picker.Item 
                label={id.mes} 
                value={id.mes} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='mes'
                />
              })
            }
          </Picker>
        </View> 
        
        <View style={styles.Chart}>
            <VictoryPie
            colorScale={data.map(dados => dados.color)}
            data={data}
            x='label'
            y='value'
            style={{
                labels:{
                    fill: "#000", 
                    fontSize:20,
                    fontFamily: 'BebasNeue-Regular' 
                }
            }}
           animate={{
            duration: 2000,
            easing:'bounce'
           }}
           innerRadius={120}
           padAngle={10}
            />
        </View>
    </ScrollView>
)
}