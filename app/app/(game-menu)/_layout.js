import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
export default function Layout() {
  useEffect(() => {
    // Hide navigation bar on Android
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('hidden');
      NavigationBar.setBehaviorAsync('overlay-swipe');
    }
    if (Platform.OS === 'ios') {
      NavigationBar.setVisibilityAsync('hidden');
      NavigationBar.setBehaviorAsync('overlay-swipe');
    }
  }, []);

  return (
    <Stack screenOptions={{
      headerShown: false,
      statusBarHidden: true,
      animation: 'none',
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          statusBarHidden: true,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
          statusBarHidden: true,
        }}
      />
    </Stack>
  );
}