import React, { useEffect, useState } from "react";
import axios from "axios";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NavigationContainer from "@react-navigation/native";

import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
const Gallery = ({ navigation }) => {
  const [images, setimages] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((res) => setimages(res.data.results));
  }, []);
  console.log(images);
  const press = (i) => {
    navigation.navigate(`Single`, { images, i });
    // console.log(i);
  };
  return (
    <View style={styles.container}>
      {images &&
        images.map((e, i) => {
          return (
            <TouchableOpacity
              key={e.id}
              style={styles.cards}
              onPress={() => {
                press(e.id);
              }}
            >
              <View style={styles.card}>
                <Image
                  style={{ height: 270, width: 300 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${
                      e && e.backdrop_path
                    }`,
                  }}
                />
              </View>
              <View style={{ TextAlign: "center" }}>
                <Text
                  style={{
                    padding: 8,
                    fontWeight: 400,
                    fontSize: 26,
                    TextAlign: "center",
                  }}
                >
                  Title: {e.name}
                </Text>
                {/* <Text style={{ paddingLeft: 4 }}>
                           OverView:{e.overview}
                          </Text> */}
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    color: "white",
    width: 452,
    height: 864,
    backgroundColor: "red"
  },
  cards: {
    height: 370,
    width: 300,
    flexDirection: 1,
    alignItems: "center",
    backgroundColor: "grey",
    overflow: "hidden",
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    height: 270,
    width: 300,
    borderRadius: 5,
  },
});
export default Gallery;
