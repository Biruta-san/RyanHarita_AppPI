import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MAIN_COLOR } from "../shared/styleConstants";

const AuthScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 6, backgroundColor: MAIN_COLOR }} />
        <View
          style={{
            flex: 4,
            backgroundColor: "#FF00FF",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            marginTop: -40, // ou ajuste conforme necessário
          }}
        >
            
          <Text>Authteste</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
