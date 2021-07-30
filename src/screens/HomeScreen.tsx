import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Colors } from '../constants';

function HomeScreen() {
  return (
    <LinearGradient colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]} testID="home-screen" style={styles.container}>

    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly'
  }
})


export default HomeScreen;