// @ts-nocheck
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import {
  LIGHT_TEXT_COLOR,
  MAIN_COLOR,
} from "../../shared/constants/styleConstants";

const NavigationBar = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={{ backgroundColor: MAIN_COLOR }}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : navigation && typeof navigation.openDrawer === "function" ? (
        <Appbar.Action
          icon="menu"
          color={LIGHT_TEXT_COLOR}
          onPress={navigation.openDrawer}
        />
      ) : null}
      <Appbar.Content color={LIGHT_TEXT_COLOR} title={title} />
    </Appbar.Header>
  );
};

export default NavigationBar;
