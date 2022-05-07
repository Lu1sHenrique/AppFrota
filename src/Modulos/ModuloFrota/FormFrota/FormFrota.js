import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import styles from './style';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'


const schema = yup.object({
    condutor: yup.string().required("Selecione o condutor"),
    placaVeiculo: yup.string().required("Selecione o placa do veículo"),
    kmInicial: yup.number().required("Preencha o KM Inicial"),
    fotoKmInicial: yup.string().required("Envie a foto do KM Inicial"),
    kmFinal: yup.number().required("Preencha o KM Final!"),
    fotoKmFinal: yup.string().required("Envie a foto do KM Final")
})


export default function FormFrota({ navigation: { } }) {

      const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
      })

      function enviarForm (data){
          console.log(data)
      }
 
  

  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
        <View style={styles.textHeader}>
            <Text style={styles.textConfig}>Gestão de Frota</Text>
        </View>

        <View style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.navigate('HomeModulos')}
            >
            <Icon name="arrow-left" size={30} color="#000" />
            </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>Checklist Máxima</Text>

        <Text>Condutor:</Text>
        <Controller
        control={control}
        name="condutor"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite o Condutor"
          />
        )}
        />
        {errors.condutor && <Text>{errors.condutor?.message}</Text>}


        <Text>Placa Veículo:</Text>
          <Controller
          control={control}
          name="placaVeiculo"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite a placa do veículo"
            />
          )}
        />
        {errors.placaVeiculo && <Text>{errors.placaVeiculo?.message}</Text>}
        

        <Text>KM Inicial:</Text>
        <Controller
        control={control}
        name="kmInicial"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite o KM Inicial do veícuklo"
          />
        )}
        />
        {errors.kmInicial && <Text>{errors.kmInicial?.message}</Text>}
        

        <Text>Foto Km Inicial:</Text>
        <Controller
        control={control}
        name="fotoKmInicial"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Envie a foto de KM Inicial"
          />
        )}
        />
        {errors.fotoKmInicial && <Text>{errors.fotoKmInicial?.message}</Text>}

        <Text>KM Final:</Text>
          <Controller
          control={control}
          name="kmFinal"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite o KM Final do veícuklo"
            />
          )}
        />
        {errors.kmFinal && <Text>{errors.kmFinal?.message}</Text>}

        <Text>Foto Km Final:</Text>
          <Controller
          control={control}
          name="fotoKmFinal"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Envie a foto de KM Final"
            />
          )}
        />
        {errors.fotoKmFinal && <Text>{errors.fotoKmFinal?.message}</Text>}

        <View>
          <TouchableOpacity
          onPress={handleSubmit(enviarForm)}
          >
            <Text>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>      
    </View>
  );
};



