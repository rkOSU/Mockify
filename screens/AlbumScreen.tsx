import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import SongList from '../components/SongList';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

    const route = useRoute();

    //Only one album will be rendered at once in AlbumScreen
    useEffect(() => {
        console.log(route);
    
    }, []);

    
    return (
    
    <View>
        <FlatList
            data={albumDetails.songs}
            renderItem={({ item }) => <SongList song={item} />}
            keyExtractor={(item) => item.id}
            //Header will not move
            ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
        /> 
        
    </View>
    )
}


export default AlbumScreen;