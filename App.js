import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView>
        <View>
          <Text>TelaLogin</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
