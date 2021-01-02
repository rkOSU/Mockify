import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

import {API, graphqlOperation} from 'aws-amplify';
import { listAlbumCategorys } from '../graphql/queries';
import { useEffect } from 'react';
import { useState } from 'react';


export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        //Set categories from grapql query
        setCategories(data.data.listAlbumCategorys.items);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumCategories();
  }, []);

  return (
    <View style={ styles.container }>
      <FlatList
        data={categories}
        renderItem={({ item }) => (<AlbumCategory 
                                    title={item.title}
                                    albums={item.albums.items}
                                    />)}
        keyExtractor={(item) => item.id}    
        showsVerticalScrollIndicator={false}                      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#98506d",
    flex: 1,
   
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
