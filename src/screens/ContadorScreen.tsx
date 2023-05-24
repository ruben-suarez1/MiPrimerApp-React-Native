/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloationActionButton from '../components/FloationActionButton';

const ContadorScreen = () => {

  const [contador, setContador] = useState(10);

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Contador: { contador }
      </Text>

      <FloationActionButton
        title="+1"
        position="br"
        onPress={() => setContador(contador + 1)}
      />

      <FloationActionButton
        title="-1"
        position="bl"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefae0',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
  },
});

export default ContadorScreen;
