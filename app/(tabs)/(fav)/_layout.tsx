import { Stack } from 'expo-router';

export default function FavLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
