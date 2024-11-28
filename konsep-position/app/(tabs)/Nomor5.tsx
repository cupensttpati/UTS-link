import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Membuat stack navigator
const Stack = createNativeStackNavigator();

// Layar Pertama
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

// Layar Kedua
const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Second Screen</Text>
    </View>
  );
};

// Komponen Utama
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
