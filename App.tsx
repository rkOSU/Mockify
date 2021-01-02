import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {AppContext} from './AppContext';

import CurrentlyPlaying from './components/CurrentlyPlaying';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { useState } from 'react';
Amplify.configure(config)


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string|null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          songId: songId,
          setSongId: (id: string) => setSongId(id),}
          }>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <CurrentlyPlaying />
        </AppContext.Provider>
        
      </SafeAreaProvider>
    );
  }
}
