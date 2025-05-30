import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/navigation/ui/dataView/Card";
import { LIGHT_TEXT_COLOR } from "../../shared/constants/styleConstants";
const projetoTemplates = [
  {
    id: 1,
    nome: "Projeto 1",
    integrantes: ["ryan", "harita"],
  },
  {
    id: 2,
    nome: "Projeto 2",
    integrantes: ["davi", "mateusao"],
  },
  {
    id: 3,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 4,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 5,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 6,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 7,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 8,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 9,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
  {
    id: 10,
    nome: "Projeto 3",
    integrantes: ["david", "isadora"],
  },
];

const ListItem = ({ item: { nome, integrantes } }) => {
  return (
    <Card title={nome}>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text>Integrantes:</Text>
        {integrantes?.map((integrante, index) => (
          <Text key={index}>{integrante},</Text>
        ))}
      </View>
    </Card>
  );
};

const ProjetoScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: LIGHT_TEXT_COLOR }}
      edges={["bottom", "left", "right"]}
    >
      <FlatList
        data={projetoTemplates}
        renderItem={ListItem}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </SafeAreaView>
  );
};

export default ProjetoScreen;
