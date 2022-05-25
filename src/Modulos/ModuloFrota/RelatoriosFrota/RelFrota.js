import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

//libs
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
//pages
import styles from './style'



export default function HomeFrota(){

  navigation = useNavigation();

    return(
     <View>
       <FlatList
        data={this.state.filmes}
        keyExtractor={item=>item.id.toString()}
        render Item={({item})=><Filmes data={item}/>}
       />
     </View>
    );
  }
   



