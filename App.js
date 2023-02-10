import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({ navigation }) {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <Image source={require('./Images/bruschetta.png')} />
      <TextInput placeholder="Enter the Number of Servings" onChangeText={num => setNum(num)} style={styles.input} />
      <Pressable onPress={() => navigation.navigate('Recipes', { number: num })} style={styles.pressure}>
        <Text style={styles.pressureText}>View Recipe</Text>
      </Pressable>
    </View>
  );
}

function Recipes({ route }) {
  const { number } = route.params;
  return (
    <View style={styles.recipeContainer}>
      <Text style={styles.title}>Bruschetta</Text>
      <View style={styles.directions}>
        <Text style={styles.category}>Ingredients</Text>
        <View style={styles.group}>
          <Text style={styles.list}>{number * 4} plum tomatoes</Text>
          <Text style={styles.list}>{number * 6} basil leaves</Text>
          <Text style={styles.list}>{number * 3} garlic cloves, chopped</Text>
          <Text style={styles.list}>{number * 3} TB olive oil</Text>
        </View>
        <Text style={styles.category}>Directions</Text>
        <View style={styles.group}>
          <Text style={styles.list}>Combine the ingredients. Add salt to taste. Top French bread slices with mixture.</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="Recipes" component={Recipes} options={{ title: '', headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  recipeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    fontSize: 35,
    paddingBottom: 20,
  },
  directions: {
    alignItems: 'baseline',
    padding: 10,
  },
  category: {
    fontSize: 25,
  },
  list: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
  },
  group: {
    paddingBottom: 20,
  },
  input: {
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
  }, 
  pressure: {
    fontSize: 25,
    backgroundColor: '#8a8a8a',
    padding: 10,
  },
  pressureText: {
    color: '#fff',
  }
});
