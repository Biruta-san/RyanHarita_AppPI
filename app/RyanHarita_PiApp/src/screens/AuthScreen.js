import { KeyboardAvoidingView, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../components/navigation/ui/inputs/TextInput";
import Button from "../components/navigation/ui/buttons/Button";
import { LIGHT_BG_COLOR, MAIN_COLOR } from "../shared/constants/styleConstants";
import { useState } from "react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 6, backgroundColor: MAIN_COLOR }} />
          <View
            style={{
              flex: 4,
              backgroundColor: LIGHT_BG_COLOR,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              marginTop: -40,
              justifyContent: "center",
              paddingHorizontal: 24,
              gap: 20,
            }}
          >
            <TextInput
              label={"Email"}
              placeholder={"Informe o email"}
              value={email}
              onChange={setEmail}
            />
            <TextInput
              label={"Senha"}
              placeholder={"Informe a senha"}
              value={senha}
              onChange={setSenha}
            />
            <Button
              onPress={() => {
                console.log("entrar kkkkkkk");
              }}
            >
              Entrar
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthScreen;
