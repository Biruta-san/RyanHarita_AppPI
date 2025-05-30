import { Button as PButton } from "react-native-paper";
import {
  LIGHT_TEXT_COLOR,
  MAIN_COLOR,
} from "../../../../shared/constants/styleConstants";

const Button = ({
  mode = "contained",
  icon,
  onPress,
  children,
  buttonColor = MAIN_COLOR,
  ...rest
}) => (
  <PButton
    icon={icon}
    mode={mode}
    onPress={onPress}
    textColor={LIGHT_TEXT_COLOR}
    buttonColor={buttonColor}
    rippleColor={MAIN_COLOR}
    {...rest}
  >
    {children}
  </PButton>
);

export default Button;
