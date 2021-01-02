import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { AlbumType } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: AlbumType,
}
const Album = (props: AlbumProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        //Hook connecting HomeScreen to AlbumScreen and pass album id
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return (
    <View style= { styles.container }>
        <TouchableWithoutFeedback onPress={onPress}>
            <Image source={{ uri: props.album.imageUri }} style={ styles.image }/>   
        </TouchableWithoutFeedback>
        <Text style={ styles.text }>{ props.album.artistsHeadline }</Text>
    </View>
    )
}

export default Album;