import React          from 'react';
import { Text, View } from 'react-native';
import styles         from './styles.js';

export default function Application() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
      Scareport
      </Text>
    </View>
  );
}
