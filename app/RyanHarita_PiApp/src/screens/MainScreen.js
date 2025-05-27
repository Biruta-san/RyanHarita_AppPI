import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AlunoScreen from "./main/AlunoScreen";
import ProjetoScreen from "./main/ProjetoScreen";

const Drawer = createDrawerNavigator();

const MainScreen = ({}) => {
  return (
    <SafeAreaView>
      <Drawer.Navigator>
        <Drawer.Screen name="Aluno" component={AlunoScreen} />
        <Drawer.Screen name="Projeto" component={ProjetoScreen} />
      </Drawer.Navigator>
      <Text>Main</Text>
    </SafeAreaView>
  );
};

export default MainScreen;
