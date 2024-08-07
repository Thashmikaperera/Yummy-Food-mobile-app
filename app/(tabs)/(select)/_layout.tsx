import { Stack } from 'expo-router';

export default function SelectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
