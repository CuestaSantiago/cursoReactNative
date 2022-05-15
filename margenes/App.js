import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Datos Personales:</Text>
      <TextInput
        style={styles.caja}
        onKeyPress={setNombre}
        placeholder='Ingrese su nombre...'
        value={nombre} />
      <TextInput
        style={styles.caja}
        onKeyPress={setApellido}
        placeholder='Ingrese su apellido...'
        value={apellido} />

      <Button title='Saludar' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal:10
  },
  caja: {
    paddingTop: 5,
    paddingHorizontal: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 5
  },
  titulo: {
    fontSize: 16,
    marginBottom:5,
    fontWeight:'bold',

  }
});
