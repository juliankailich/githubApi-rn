import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserSearchScreen from './src/presentation/screens/UserSearchScreen';
import RepoSearchScreen from './src/presentation//screens/RepoSearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserSearch"
          component={UserSearchScreen}
          options={{ title: 'Search users' }}
        />
        <Stack.Screen
          name="RepoSearch"
          component={RepoSearchScreen}
          options={{ title: 'Search repositories' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
