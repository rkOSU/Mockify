import React from 'react';
import { Text, Image, View } from 'react-native';
import { Song } from '../../types';

import styles from './styles';

const song = {
    id: "1",
    image_uri: 'https://i.ytimg.com/vi/pWgXIV7jZaU/maxresdefault.jpg',
    title: 'Brown Man, Black Man',
    artist: 'Matthew Boone (featuring The Holy Spirit)'
}
const CurrentlyPlaying = () => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.image_uri }} style={styles.image} />
            <View style={styles.right_container}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>
    )
}

export default CurrentlyPlaying;