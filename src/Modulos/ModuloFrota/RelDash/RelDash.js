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
import { 
  VictoryPie, 
  VictoryBar,
  VictoryArea,
  VictoryHistogram,
  VictoryLine,
  VictoryChart,
  VictoryStack} from 'victory-native'
import {Picker} from '@react-native-picker/picker'
import ModalMsgSemDash from '../../../Components/Modal/ModalMsgSemDash/ModalMsgSemDash';
//pages
import styles from './style'
import PageHeader from '../../../Components/PageHeader/PageHeader'

const dados=[
    {
    id: '1',
    nome: 'Km Rodados',
    value: 7000,
    color: '#ff8555',
    percent: '85%',
    mes: "Janeiro"
    },
    {
    id: '2',
    nome: 'Consumo gasolina',
    value: 50,
    color: '#975fff',
    percent: '5%',
    mes: "Favereiro"
    },
    {
    id: '3',
    nome: 'Horas fora',
    value: 150,
    color: '#8f5e',
    percent: '10%',
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
const [charSelecionado, setCharSelecionado] = useState(0);

const navigation = useNavigation();
  
    return(
    <View style={styles.container}>
       
       <PageHeader/>

      <ScrollView>
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
              label='Selecione o mês' 
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

        <View style={{marginTop: 20}}>
          <Picker
            selectedValue={charSelecionado}
            onValueChange={(itemValue) =>
              setCharSelecionado(itemValue)
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
              label='Selecione o tipo de gráfico'
              value={0} 
              style={{
                color: '#000',
                fontFamily: 'BebasNeue-Regular'
              }}
              />
              <Picker.Item 
                label='Pizza' 
                value={1} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='pizza'
              />

              <Picker.Item 
                label='Barra' 
                value={2} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='barra'
              />

              <Picker.Item 
                label='Linha' 
                value={3} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='linha'
              />

              <Picker.Item 
                label='Área' 
                value={4} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='area'
              />

              <Picker.Item 
                label='Pilha' 
                value={5} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='pilha'
              />

              <Picker.Item 
                label='Histograma' 
                value={6} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='histograma'
              />

              <Picker.Item 
                label='Rosca' 
                value={7} 
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='rosca'
              />
          </Picker>
        </View> 

        {
          charSelecionado == 0 ?
            <ModalMsgSemDash/>     
          : null
        }
        
        {
          charSelecionado == 1 ? 
          <View style={styles.Chart}>
            <VictoryPie
            colorScale={data.map(dados => dados.color)}
            data={data}
            x='percent'
            y='value'
            style={{
                labels:{
                    fill: "#000", 
                    fontSize:20,
                    fontFamily: 'BebasNeue-Regular' 
                }
            }}
           animate={{
            duration: 1000,
            easing:'circle'
           }}
            />
            <View style={styles.ContainerLabels}>
            {
            data.map(id => {
              return <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                  <View style={{borderWidth: 1, backgroundColor: id.color, paddingVertical: 10, width: 25, marginRight: 10}}></View>
                  <Text style={styles.txtLabels}>{id.nome}</Text>
                </View>
            })
            }
            </View>
          </View>
          : null
        }

        {
          charSelecionado == 2 ? 
            <VictoryChart
            domainPadding={10}
            >
              <VictoryBar
              alignment='start'
              colorScale={data.map(dados => dados.color)}
              data={data}
              x='id'
              y='value'
              y0='0'
              style={{
                labels:{
                    fill: "#000", 
                    fontSize:20,
                    fontFamily: 'BebasNeue-Regular' 
                },
                data:{
                  fill: '#d21e2b'
                }
              }}
              animate={{
              duration: 1000,
              easing:'circle'
              }}
              />
            </VictoryChart>
          : null
        }

        {
          charSelecionado == 3 ? 
            <VictoryChart>
              <VictoryLine
              style={{
                data: { stroke: '#d21e2b' },
                parent: { border: "1px solid #ccc"}
              }}
              data={data}
              x='id'
              y='value'
              animate={{
                duration: 1000,
                easing:'circle'
                }}
            />
            </VictoryChart>
          : null
        }

        {
          charSelecionado == 4 ?
          <VictoryChart> 
            <VictoryArea
            style={{ data: { fill: "#000" } }}
            data={data}
            x='id'
            y='value'
            animate={{
              duration: 1000,
              easing:'circle'
              }}
            />
          </VictoryChart>
          : null
        }

        {
          charSelecionado == 5 ?
          <>
          <VictoryStack>
            <VictoryArea
              colorScale={data.map(dados => dados.color)}
              data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
              animate={{
                duration: 1000,
                easing:'circle'
                }}
            />
            <VictoryArea
              colorScale={data.map(dados => dados.color)}
              data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
              animate={{
                duration: 1000,
                easing:'circle'
                }}
            />
            <VictoryArea
              colorScale={data.map(dados => dados.color)}
              data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
              animate={{
                duration: 1000,
                easing:'circle'
                }}
            />
          </VictoryStack>
          <View style={styles.ContainerLabels}>
          {
          data.map(id => {
            return <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{borderWidth: 1, backgroundColor: id.color, paddingVertical: 10, width: 25, marginRight: 10}}></View>
                <Text style={styles.txtLabels}>{id.nome}</Text>
              </View>
          })
          }
          </View>
          </>
          : null
        }

        {
          charSelecionado == 6 ?
          <VictoryChart
            domainPadding={10}
          >
            <VictoryHistogram
              data={data}
              x='id'
              animate={{
                duration: 1000,
                easing:'circle'
                }}
            />
          </VictoryChart>
          : null
        }

        {
          charSelecionado == 7 ?
          <View style={styles.Chart}>
            <VictoryPie
            colorScale={data.map(dados => dados.color)}
            data={data}
            x='percent'
            y='value'
            style={{
              labels:{
                  fill: "#000", 
                  fontSize:20,
                  fontFamily: 'BebasNeue-Regular' 
              }
            }}
           animate={{
            duration: 1000,
            easing:'circle'
           }}
           innerRadius={170}
           padAngle={5}
            />
          <View style={styles.ContainerLabels}>
          {
          data.map(id => {
            return <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{borderWidth: 1, backgroundColor: id.color, paddingVertical: 10, width: 25, marginRight: 10}}></View>
                <Text style={styles.txtLabels}>{id.nome}</Text>
              </View>
          })
          }
          </View>
          </View>
          : null
        }
        </ScrollView>
    </View>
)
}