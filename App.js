
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import { Navigation } from './navigation';
import {AudioPlayerProvider, RoomsProvider} from "./core/context";

const App = () => {
  return (
    <AudioPlayerProvider>
      <RoomsProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1F'}}>
          <Navigation />
        </SafeAreaView>
      </RoomsProvider>
    </AudioPlayerProvider>
  );
};

export default App;
