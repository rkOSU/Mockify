import React from 'react';
import { Text, Image, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Song } from '../../types';

import {AppContext} from '../../AppContext';

import styles from './styles';
import { useContext } from 'react';


export type SongListItemProps = {
    song: Song
}

const SongList = (props: SongListItemProps) => {
    const { song } = props;

    const playSong = () => {
        setSongId(song.id);
    }
    //Not exactly sure how context works, but this will enable the "CurrentlyPlaying" widget to know 
    //what song to play
    const { setSongId } = useContext(AppContext);
    return ( 
        <TouchableHighlight onPress={playSong}>
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.right_container}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default SongList;