import React from 'react';
import {AlbumType} from '../../types';
import Album from '../Album';
import AlbumCategory from '../AlbumCategory';
import styles from '../AlbumHeader/styles';
import albumCategories from '../../data/albumCategories';
import albumDetails from '../../data/albumDetails';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export type AlbumHeaderProps = {
    album: AlbumType;
}

const AlbumHeader = (props: AlbumHeaderProps) => {

    const {album} = props;

    return (
        /* 

        Layout:
        Image
        Name of Album 
        Name of Artist 
        Play Button 
        

        */
        <View style={styles.container}>
            <Image source={{uri: album.image_uri}}style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.artist_and_likes}>
                <Text style={styles.by}>By {album.by}</Text>
                {/*Don't have likes currently */} 
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.button_text}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;