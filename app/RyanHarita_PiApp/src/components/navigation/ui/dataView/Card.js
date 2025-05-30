import { Divider, Card as PCard } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import {
  LIGHT_BG_COLOR,
  SECONDARY_COLOR,
} from "../../../../shared/constants/styleConstants";
import { Entypo } from "@expo/vector-icons";
import Button from "../buttons/Button";
import { useState } from "react";
import { Menu, MenuItem } from "../menus/Menu";

const Card = ({
  title,
  subtitle,
  children,
  actions,
  marginHorizontal,
  marginVertical,
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: LIGHT_BG_COLOR,
      marginHorizontal: marginHorizontal || 10,
      marginVertical: marginVertical || 0,
      paddingBottom: 10,
    },
    title: {
      fontWeight: "bold",
    },
  });

  const [visible, setVisible] = useState(false);

  return (
    <PCard style={styles.card} elevation={4}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          {(title || subtitle) && (
            <PCard.Title
              title={title}
              subtitle={subtitle}
              titleStyle={styles.title}
            />
          )}
          <PCard.Content>
            <>{children}</>
          </PCard.Content>
          {actions && <PCard.Actions>{actions}</PCard.Actions>}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            paddingRight: 10,
          }}
        >
          <Menu
            visible={visible}
            setVisible={setVisible}
            anchor={
              <Button
                mode="text"
                buttonColor="transparent"
                onPress={() => {
                  setVisible(true);
                }}
              >
                <Entypo
                  name="dots-three-vertical"
                  size={20}
                  color={SECONDARY_COLOR}
                />
              </Button>
            }
          >
            <MenuItem onPress={() => {}} title="Item 1" />
            <MenuItem onPress={() => {}} title="Item 2" />
            <Divider />
            <MenuItem onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </View>
    </PCard>
  );
};

export default Card;
