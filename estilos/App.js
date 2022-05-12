import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='COMP 1' />
      <Button title='COMP 2' color='green'/>
      <Button title='COMP 3' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //flexDirection:'column', siempre afecta al eje principal vertical
    //flexDirection:'row', al eje principal horizontal
    flexDirection:'column', 
    justifyContent:'flex-end', // siempre afecta al eje principal 
    //alignItems:'stretch'// es el valor original y solo existe en alingItems
    alignItems:'flex-end'// siempre afecta eje secundario
  },
});
