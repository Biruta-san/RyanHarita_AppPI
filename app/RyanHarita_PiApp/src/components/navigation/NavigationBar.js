// @ts-nocheck
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

const NavigationBar = ({ navigation, route, options, back }) => {
  //   const [visible, setVisible] = React.useState(false);
  //   const openMenu = () => setVisible(true);
  //   const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {/* {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 2 was pressed");
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 3 was pressed");
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      ) : null} */}
    </Appbar.Header>
  );
};

export default NavigationBar;
