import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Gallery from "./Component/Gallery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Single from "./Component/Single";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, color: "black" }}>Gallery App</Text>
        <Text style={{ color: "black" }}>Here is the images</Text>
        <NavigationContainer style={{ color: "white" }}>
          {/* <Gallery /> */}

          <Stack.Navigator style={{ color: "white" }} initialRoute="Gallery">
            <Stack.Screen
              style={{ color: "white" }}
              name="Gallery"
              component={Gallery}
            />
            <Stack.Screen
              style={{ color: "white" }}
              name="Single"
              component={Single}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight:"100vh",
    flexDirection: "column",
    // backgroundColor: 'black',
    alignItems: "center",
    padding: 20,
    color: "black",
  },
});
