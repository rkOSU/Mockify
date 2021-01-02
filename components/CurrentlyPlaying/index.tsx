import React, {useEffect, useState} from 'react';
import { Ionicons, Entypo, EvilIcons, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import { Text, Image, View } from 'react-native';
import { Song } from '../../types';
import { Audio } from 'expo-av';

import styles from './styles';
import { Sound } from 'expo-av/build/Audio';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {AppContext} from '../../AppContext';
import { useContext } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../graphql/queries';


const song = {
    id: "1",
    uri: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    imageUri: 'https://i.ytimg.com/vi/pWgXIV7jZaU/maxresdefault.jpg',
    title: 'Brown Man, Black Man',
    artist: 'Matthew Boone'
}



const CurrentlyPlaying = () => {

    //State for use with getSong
    const [song, setSong] = useState(null);

    //States which will be used once songs start playing (and the widget pops up)
    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    //States which will be used for the progress bar
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

    

    //second argument indicates what will be monitored for changes
    useEffect(() => {
        //if song is true, play current song
        if (song) {
            playCurrentSong();
        } 
    }, [song]);


     //Recieve context of which song to play
     const { songId } = useContext(AppContext);

     //Using songId, get song from database
     useEffect(() => {
         const fetchSong = async () => {
             try {
                 const data = await API.graphql(graphqlOperation(getSong, {id: songId}))
                 setSong(data.data.getSong);
             } catch (e){
                 console.log(e);
             }
         };
         fetchSong();
     }, [songId]);

     //If no song is playing, don't render the currentlyPlaying widget
     if (!song) {
         return null;
     }

    //STYLING 
    //Determine percentage value of progress in song for later use
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