import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './style'


export default function HomeModulos() {

  return (
      <View style={styles.container}>
        <View style={styles.containerButtonsMod}>
          <View style={styles.containerRow}>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>
                    Frota
                  </Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>
                    Comercial
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
              
            <View style={styles.containerRow}>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>
                    Técnica
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>
                    RH
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.containerRow}>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>
                    Estoque
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>
                    Financeiro
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
  );
};



