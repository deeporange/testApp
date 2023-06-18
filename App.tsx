/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section from './src/components/Section';
import MyButton from './src/components/MyButton';
import MyText from './src/components/MyText';
import { PostList } from './src/components/post/PostList';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  

  return (
    <PaperProvider theme={MD3LightTheme}> <PostList/></PaperProvider>
   
  );
}

const styles = StyleSheet.create({

});

export default App;
