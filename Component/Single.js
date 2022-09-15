import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Single = ({ navigation, route }) => {
  const { images, i } = route.params;
  console.log(images, i);

  return (
    <View style={{ color: "white" }}>
      {images.map((e) => {
        if (e.id === i) {
          return (
            <TouchableOpacity key={i} style={styles.cards}>
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
              <View>
                <Text style={{ paddingLeft: 8 }}>{e.name}</Text>
                <Text style={{ padding: 8, fontWeight: 200, fontSize: 15 }}>
                  Popularity: {e.popularity}
                </Text>
                <Text style={{ padding: 8, fontWeight: 200, fontSize: 15 }}>
                  Vote: {e.vote_average}
                </Text>

                <Text style={{ padding: 8, fontWeight: 200, fontSize: 15 }}>
                  Date Of Release: {e.first_air_date}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    height: 400,
    width: 300,
    backgroundColor: "#b5c99a",
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
export default Single;
