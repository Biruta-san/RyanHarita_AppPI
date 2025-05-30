import { Menu as PMenu } from "react-native-paper";
import { SECONDARY_COLOR } from "../../../../shared/constants/styleConstants";

export const MenuItem = ({ onPress, title }) => {
  return (
    <PMenu.Item rippleColor={SECONDARY_COLOR} onPress={onPress} title={title} />
  );
};

export const Menu = ({ visible, setVisible, anchor, children }) => {
  return (
    <PMenu
      contentStyle={{ backgroundColor: "white" }}
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={anchor}
    >
      {children}
    </PMenu>
  );
};
