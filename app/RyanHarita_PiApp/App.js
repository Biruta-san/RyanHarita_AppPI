import { PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";
import NavigationBar from "./src/components/navigation/NavigationBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            header: (props) => <NavigationBar {...props} />,
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={AuthScreen}
          />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
