import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import SongList from '../components/SongListItem';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';

import {API, graphqlOperation} from 'aws-amplify';
import { getAlbum } from '../graphql/queries';
import { useState } from 'react';

const AlbumScreen = () => {

    const [album, setAlbum] = useState(null);
    const route = useRoute();
    const albumId = route.params.id;

    //Only one album will be rendered at once in AlbumScreen
    useEffect(() => {
        const fetchAlbumDetails = async () => {
            try {
                //pass in id from route.params
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId}))
                setAlbum(data.data.getAlbum);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchAlbumDetails();
    
    }, []);

    if (!album) {
        return <Text>Loading...</Text>
    }
    
    return (
    
    <View style={styles.container}>
        <FlatList
            data={album.songs.items}
            renderItem={({ item }) => <SongList song={item} />}
            keyExtractor={(item) => item.id}
            //Header will not move
            ListHeaderComponent={() => <AlbumHeader album={album}/>}
            showsVerticalScrollIndicator={false}   
        /> 
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#98506d",
      height: '100%'
    },
    
  });


export default AlbumScreen;