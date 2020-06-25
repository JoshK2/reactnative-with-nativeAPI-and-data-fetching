import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsScreen} from './screens/news';
import {ArticleScreen} from './screens/article';

function News() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Articles" component={NewsScreen} />
      <Tab.Screen name="localization" component={LocalizationScreen} />
    </Tab.Navigator>
  );
}

function LocalizationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>localization!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Article" component={ArticleScreen} />
          {/* <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
