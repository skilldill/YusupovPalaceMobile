

import React from 'react';
import {SafeAreaView} from 'react-native';
import { Navigation } from './navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1F'}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
