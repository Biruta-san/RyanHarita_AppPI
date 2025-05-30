import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LIGHT_TEXT_COLOR } from "../../shared/constants/styleConstants";

const AlunoScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: LIGHT_TEXT_COLOR }}>
      <Text>123</Text>
    </SafeAreaView>
  );
};

export default AlunoScreen;
