import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { StyleSheet, Text, View, Image } from 'react-native';
const Gallery = () => {
    const [images, setimages] = useState();
    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=2&limit=100")
            .then(res => setimages(res.data));
    }, []);
    return (
        <View>
            {
                images && images.map((e, i) => {

                    return (

                        <View key={i} style={styles.cards}>
                            <View style={styles.card}>
                                <Image
                                    style={{ height: 270, width: 300 }}
                                    source={{ uri: e.download_url }}
                                />
                            </View>
                            <View>
                                <Text style={{ padding: 8, fontWeight: 400,fontSize:25 }}>Title: {e.author}</Text>
                                <Text style={{ paddingLeft: 8 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Text>
                            </View>
                        </View>

                    )
                }
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    cards: {
        height: 370,
        width: 300,
        backgroundColor: "grey",
        overflow:'hidden',
        borderRadius: 5,
        marginBottom: 10,

    },
    card: {
        height: 270,
        width: 300,
        borderRadius: 5,

    }
})
export default Gallery;
