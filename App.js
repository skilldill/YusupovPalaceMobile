
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import { Navigation } from './navigation';
import {RoomsProvider} from "./core/context";

const App = () => {
  return (
    <RoomsProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1F'}}>
        <Navigation />
      </SafeAreaView>
    </RoomsProvider>
  );
};

export default App;
