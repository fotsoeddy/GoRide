import { View, Text } from "react-native";

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-red-500">404 - Page Not Found</Text>
      <Text className="mt-2 text-gray-600">Oops! The page you are looking for does not exist.</Text>
    </View>
  );
}
