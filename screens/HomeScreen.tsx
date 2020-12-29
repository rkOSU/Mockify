import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';

const category_one = {
  id: '1',
  title: 'Various Artists',
  albums: [
    {
      id: '1',
      image_uri: 'https://i.pinimg.com/564x/23/0f/be/230fbe602211f8f78af0e0d72be1d9ca.jpg',
      artist_headline: 'Bible Project'
    },
    {
      id: '2',
      image_uri: 'https://i.ytimg.com/vi/pWgXIV7jZaU/maxresdefault.jpg',
      artist_headline: 'Taj Mahal'
    },
    {
      id: '3',
      image_uri: 'data:image/jpeg;base64,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',
      artist_headline: 'Kanye West'
    },
    {
      id: '4',
      image_uri: 'data:image/jpeg;base64,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',
      artist_headline: 'Bros in The Rain'
    }
    

  ]
}

export default function TabOneScreen() {
  return (
    <View style={ styles.container }>
      <AlbumCategory 
        title={ category_one.title }
        albums={ category_one.albums }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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