import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './Component/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={{fontSize:25,color:"white"}}>Gallery App</Text>
    <Text style={{color:"white"}} >Here is the images</Text>
     <Gallery/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding:20,
  },
});
