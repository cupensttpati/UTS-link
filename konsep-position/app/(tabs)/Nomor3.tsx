import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBlue}>
        <Text style={styles.buttonText}>Dumok 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGreen}>
        <Text style={styles.buttonText}>Dumok 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Mengatur arah flex menjadi horizontal
    gap: 20, // Jarak antara tombol
  },
  buttonBlue: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  buttonGreen: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;