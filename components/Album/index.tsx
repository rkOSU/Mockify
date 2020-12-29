import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { AlbumType } from '../../types';

export type AlbumProps = {
    album: AlbumType,
}
const Album = (props: AlbumProps) => (
    <View style= { styles.container }>
        <Image source={{ uri: props.album.image_uri }} style={ styles.image }/>
        <Text style={ styles.text }> { props.album.artist_headline } </Text>
    </View>
)

export default Album;