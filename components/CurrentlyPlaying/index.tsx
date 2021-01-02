import React, {useEffect, useState} from 'react';
import { Ionicons, Entypo, EvilIcons, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import { Text, Image, View } from 'react-native';
import { Song } from '../../types';
import { Audio } from 'expo-av';

import styles from './styles';
import { Sound } from 'expo-av/build/Audio';
import { TouchableOpacity } from 'react-native-gesture-handler';

const song = {
    id: "1",
    uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    imageUri: 'https://i.ytimg.com/vi/pWgXIV7jZaU/maxresdefault.jpg',
    title: 'Brown Man, Black Man',
    artist: 'Matthew Boone'
}
const CurrentlyPlaying = () => {

    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const [position, setPosition] = useState<number|null>(null);
    const [duration, setDuration] = useState<number| null>(null);
    
    
    const onPlayBackStatusUpdate = (status) => {
        //console.log(status);
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    //Async function because everything is done asyncronously
    const playCurrentSong = async ()=> {

        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate
        )

        setSound(newSound)
    }

    const pauseOrPlay = async () => {
        //If no song is playing (loaded), do nothing
        if (!sound)  {
            console.log('uhh')
            return;
        }
        //If song is playing, pause. Esle, play
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }
    useEffect(() => {
        //Play song
        playCurrentSong();
        
    }, [])

    //For progress bar
    const getProgress = () => {
        if (sound == null || duration === null || position === null){
            return 0;
        }

        return (position/duration) * 100;
    }
    return (
        <View style={styles.container}>
            <View style={[styles.progress, {width: `${getProgress()}%`}]}/>
                <View style={styles.remainder}>
                    <Image source={{ uri: song.imageUri }} style={styles.image} />
                    <View style={styles.right_container}>
                        <View style={styles.name_and_artist}>
                            <Text style={styles.title}>{song.title}</Text>
                            <Text style={styles.artist}>{song.artist}</Text>
                        </View>                    
                        <View style={styles.play_button}>
                            <TouchableOpacity onPress={pauseOrPlay}>
                            <FontAwesome name={isPlaying ? 'pause': 'play'} size={40} color="white"/>
                            </TouchableOpacity>                   
                        </View>             
                    </View>
                </View>       
                
        </View>
    )
}

export default CurrentlyPlaying;