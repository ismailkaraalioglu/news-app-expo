import { SafeAreaProvider } from "react-native-safe-area-context";
import NewsScreen from "./src/screens/news-screen";

export default function App() {
  return (
    <SafeAreaProvider>
      <NewsScreen />
    </SafeAreaProvider>
  );
}
