import { TextInput as PInput } from "react-native-paper";
import { LIGHT_BG_COLOR, MAIN_COLOR, SECONDARY_COLOR } from "../../../../shared/constants/styleConstants";

const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  mode = "outlined",
  ...rest
}) => {
  return (
    <PInput
      mode={mode}
      label={label}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      outlineColor={MAIN_COLOR}
      activeOutlineColor={SECONDARY_COLOR}
      {...rest}
    />
  );
};

export default TextInput;
