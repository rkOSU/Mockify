import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import SongList from '../components/SongListItem';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

    const route = useRoute();

    //Only one album will be rendered at once in AlbumScreen
    useEffect(() => {
        console.log(route);
    
    }, []);

    
    return (
    
    <View style={styles.container}>
        <FlatList
            data={albumDetails.songs}
            renderItem={({ item }) => <SongList song={item} />}
            keyExtractor={(item) => item.id}
            //Header will not move
            ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
            showsVerticalScrollIndicator={false}   
        /> 
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#98506d",
    },
    
  });


export default AlbumScreen;