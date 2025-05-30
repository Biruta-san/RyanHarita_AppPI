import { createDrawerNavigator } from "@react-navigation/drawer";
import AlunoScreen from "./main/AlunoScreen";
import ProjetoScreen from "./main/ProjetoScreen";
import NavigationBar from "../components/navigation/NavigationBar";

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
      initialRouteName="Projeto"
    >
      <Drawer.Screen name="Projeto" component={ProjetoScreen} />
      <Drawer.Screen name="Aluno" component={AlunoScreen} />
    </Drawer.Navigator>
  );
};

export default MainScreen;
