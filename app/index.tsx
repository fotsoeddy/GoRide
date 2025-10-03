import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-blue-600">Hello, World!</Text>
    </SafeAreaView>
  );
};

export default Home;
